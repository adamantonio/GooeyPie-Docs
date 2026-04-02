import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';


const widgetSchema = z.object({
  title: z.string(),
  description: z.string(),
  
  properties: z.array(z.object({
    name: z.string(),
    type: z.string(),
    default: z.string().optional(),
    description: z.string(),
  })),

  methods: z.array(z.object({
    name: z.string(),
    returns: z.string(),
    description: z.string(),
  })).optional(),

  events: z.array(z.object({
    name: z.string(),
    payload: z.string().optional(),
    description: z.string(),
  })),

  styles: z.array(z.object({
    variable: z.string(),
    default: z.string().optional(),
    description: z.string(),
  })),
});


export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	widgets: defineCollection({ schema: widgetSchema }),
};

