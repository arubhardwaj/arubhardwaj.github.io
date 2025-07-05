
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CalendarIcon, Upload, Sparkles, FileText, ArrowLeft } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  projectDescription: z.string().min(50, 'Project description must be at least 50 characters'),
  budget: z.number().min(1, 'Budget must be greater than 0'),
  currency: z.enum(['USD', 'EUR']),
  contactEmail: z.string().email('Please enter a valid email address'),
  timeline: z.enum(['less-than-month', '1-3-months', '3-6-months', '6-months-plus']),
  startDate: z.date().optional(),
  dueDate: z.date().optional(),
  urgentProject: z.boolean().default(false),
  startImmediately: z.boolean().default(false),
}).refine((data) => {
  if (data.startDate && data.dueDate) {
    return data.dueDate >= data.startDate;
  }
  return true;
}, {
  message: "Due date must be on or after start date",
  path: ["dueDate"],
});

type FormData = z.infer<typeof formSchema>;

const SubmitProject = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRewriting, setIsRewriting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currency: 'USD',
      urgentProject: false,
      startImmediately: false,
    },
  });

  const watchStartDate = form.watch("startDate");

  // Set minimum due date to start date + 2 days
  const getMinDueDate = () => {
    if (watchStartDate) {
      return addDays(watchStartDate, 2);
    }
    return addDays(new Date(), 2);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];
    
    const validFiles = files.filter(file => allowedTypes.includes(file.type));
    
    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid file type",
        description: "Please upload only PDF, DOC, DOCX, CSV, or Excel files.",
        variant: "destructive",
      });
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const rewriteDescription = async () => {
    const currentDescription = form.getValues('projectDescription');
    
    if (!currentDescription || currentDescription.length < 10) {
      toast({
        title: "Description too short",
        description: "Please enter at least 10 characters before enhancing.",
        variant: "destructive",
      });
      return;
    }

    setIsRewriting(true);
    
    try {
      console.log('Calling enhance-description function...');
      console.log('Description to enhance:', currentDescription.substring(0, 100) + '...');
      
      const { data, error } = await supabase.functions.invoke('enhance-description', {
        body: { description: currentDescription }
      });

      console.log('Enhancement response:', { data, error });

      if (error) {
        console.error('Enhancement error:', error);
        throw new Error(error.message || 'Failed to enhance description');
      }

      if (data && data.enhancedDescription) {
        console.log('Enhancement successful');
        form.setValue('projectDescription', data.enhancedDescription);
        toast({
          title: "Description enhanced!",
          description: "Your project description has been enhanced using AI.",
        });
      } else {
        console.error('No enhanced description in response:', data);
        throw new Error('No enhanced description received');
      }
    } catch (error) {
      console.error('Error enhancing description:', error);
      toast({
        title: "Enhancement failed",
        description: error instanceof Error ? error.message : "Failed to enhance description. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsRewriting(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Submitting project:', data);
      console.log('Uploaded files:', uploadedFiles);
      
      // Create FormData to include files
      const formData = new FormData();
      
      // Add project data as JSON string
      const projectData = {
        ...data,
        startDate: data.startDate?.toISOString(),
        dueDate: data.dueDate?.toISOString(),
        submittedAt: new Date().toISOString()
      };
      formData.append('projectData', JSON.stringify(projectData));
      
      // Add files to FormData
      uploadedFiles.forEach((file, index) => {
        formData.append(`file_${index}`, file);
      });

      const { data: result, error } = await supabase.functions.invoke('submit-project', {
        body: formData
      });

      if (error) {
        console.error('Submit error:', error);
        throw new Error(error.message || 'Failed to submit project');
      }

      console.log('Project submitted successfully:', result);
      setIsSubmitted(true);
      
      toast({
        title: "Project submitted successfully!",
        description: "We will get back to you within 1 working day. Check your email for confirmation.",
      });
    } catch (error) {
      console.error('Error submitting project:', error);
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Failed to submit project. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-hero-lime flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border-2 border-theme-gold">
          <div className="w-16 h-16 bg-theme-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-theme-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-theme-olive mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your project has been submitted successfully. We will review your requirements and get back to you within 1 working day. Please check your email for confirmation.
          </p>
          <div className="space-y-3">
            <Button onClick={() => setIsSubmitted(false)} className="w-full bg-theme-olive hover:bg-theme-olive/90 text-white">
              Submit Another Project
            </Button>
            <Link to="/">
              <Button variant="outline" className="w-full border-theme-gold text-theme-olive hover:bg-theme-gold/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hero-lime py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with back link */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-theme-olive hover:text-theme-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-theme-olive mb-4">Submit Your Project</h1>
            <p className="text-xl text-gray-700">
              Tell us about your data science and AI needs. We'll help transform your ideas into reality.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-theme-gold">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Project Description */}
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">Project Description *</FormLabel>
                    <div className="space-y-2">
                      <FormControl>
                        <Textarea
                          placeholder="Describe your project in detail. Include objectives, requirements, expected outcomes, and any specific technologies or methodologies you prefer..."
                          className="min-h-[120px] border-2 border-gray-200 focus:border-theme-gold"
                          {...field}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={rewriteDescription}
                        disabled={isRewriting}
                        className="w-full sm:w-auto border-theme-gold text-theme-olive hover:bg-theme-gold/10"
                      >
                        {isRewriting ? (
                          <>
                            <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                            Enhancing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Enhance with AI
                          </>
                        )}
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Budget */}
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">Proposed Budget *</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="5000"
                          className="border-2 border-gray-200 focus:border-theme-gold"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-24 border-2 border-gray-200 focus:border-theme-gold">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="USD">USD</SelectItem>
                              <SelectItem value="EUR">EUR</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact Email */}
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">Contact Email *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@company.com" 
                        className="border-2 border-gray-200 focus:border-theme-gold"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Timeline */}
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-theme-olive">Project Timeline *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-2 border-gray-200 focus:border-theme-gold">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="less-than-month">Less than 1 month</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-months-plus">6+ months (Long term)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Date */}
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-theme-olive">Preferred Start Date (Optional)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal border-2 border-gray-200 hover:border-theme-gold",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Due Date */}
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-theme-olive">Preferred Due Date (Optional)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal border-2 border-gray-200 hover:border-theme-gold",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < getMinDueDate()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <label className="text-lg font-semibold text-theme-olive">Project Documents</label>
                <div className="border-2 border-dashed border-theme-gold rounded-lg p-6 text-center bg-theme-gold/5">
                  <Upload className="w-12 h-12 text-theme-gold mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload PDF, DOC, CSV, or Excel files</p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.csv,.xls,.xlsx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button type="button" variant="outline" asChild className="border-theme-gold text-theme-olive hover:bg-theme-gold/10">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      Choose Files
                    </label>
                  </Button>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-theme-gold/10 p-3 rounded border border-theme-gold">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-theme-olive" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="text-theme-olive hover:text-red-600"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="urgentProject"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-theme-gold data-[state=checked]:bg-theme-gold"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-theme-olive">This is an urgent project</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="startImmediately"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-theme-gold data-[state=checked]:bg-theme-gold"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-theme-olive">I want to start immediately</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full text-lg py-6 bg-theme-olive hover:bg-theme-olive/90 text-white"
              >
                {isSubmitting ? 'Submitting Project...' : 'Submit Project'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;
