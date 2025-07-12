-- Create storage bucket for project files
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-files', 'project-files', true);

-- Create policies for project files bucket
CREATE POLICY "Anyone can view project files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-files');

CREATE POLICY "Anyone can upload project files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-files');

CREATE POLICY "Anyone can update project files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-files');

CREATE POLICY "Anyone can delete project files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'project-files');