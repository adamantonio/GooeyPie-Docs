import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'zod';
import { glob } from 'astro/loaders';


const widgetSchema = z.object({
    title: z.string(),

    syntax: z.string(), // e.g., "btn = ml.Button(master, **options)"
    parameters: z.array(z.object({
      name: z.string(),
      type: z.string(),
      default: z.string().optional(),
      description: z.string(),
    })).default([]),
      
    properties: z.array(z.object({
      name: z.string(),
      type: z.string(),
      default: z.string().optional(),
      description: z.string(),
    })).default([]),

    methods: z.array(z.object({
      name: z.string(),
      parameters: z.string().optional(),
      returns: z.string().optional(),
      description: z.string(),
    })).default([]),

    events: z.array(z.object({
      name: z.string(),
      description: z.string(),
    })).default([]),
    
    exclude_events: z.array(z.string()).default([]),

    styleImage: z.string().optional(), // URL or path to the style image

    styles: z.array(z.object({
      name: z.string(),
      type: z.string().optional(),
      description: z.string(),
      default: z.string().optional(),
    })).default([]),
});


export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  widgets: defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: 'src/content/widgets' }),
    schema: widgetSchema }),
};
