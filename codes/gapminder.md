## Relation between GDP per capita and Life Expectancy

---
title: Relation between GDP per capita and Life Expectancy
author: Aru Bhardwaj <br> (arubhardwaj@hotmail.com)
date: May 14, 2020
output:
  prettydoc::html_pretty:
    theme: tactile
    fontsize: 10pt
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE) 
```
# Install required packages
```{r, include=FALSE}
install.packages("tidyverse")
```
# Needed Libraries
```{r, results = FALSE}
library(gapminder)
library(ggplot2)
library(gganimate)
data(gapminder)
```
 
# Plot
```{r}
 ggplot(gapminder, aes(x = gdpPercap, y=lifeExp, size = pop, colour = continent)) +
  geom_point(show.legend = TRUE, alpha = 0.7) +
  scale_color_viridis_d() +
  scale_size(range = c(2, 12)) +
  scale_x_log10() +
  labs(title = 'Relation between GDP per capita and Life Expectancy',subtitle = 'Year: {frame_time}', x = 'GDP per capita', y = 'Life Expectancy', caption = 'Data Source: www.gapminder.org/data') +
  transition_time(year) +
  ease_aes('linear')

```


See: https://rpubs.com/arubhardwaj/gdp-and-per-capita 
