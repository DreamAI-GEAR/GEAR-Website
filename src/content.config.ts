import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: 'content' }),
  schema: z.object({
    teamName: z.string(),
    teamFullName: z.string(),
    org: z.string(),
    tagline: z.string(),
    vision: z.string(),
    goals: z.array(z.string()),
    recentActivities: z.array(z.object({
      title: z.string(),
      date: z.string(),
    })),
    contact: z.object({
      email: z.string(),
      github: z.string(),
    }),
    nav: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'blog/posts' }),
  schema: z.object({
    title: z.string(),
    state: z.enum(['draft', 'published', 'archived']),
    authors: z.array(z.string()),
    publishedDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    repoUrl: z.string().optional(),
    status: z.string().optional(),
    order: z.number().default(99),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: '*/README.md', base: 'members' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['교수', '멘토', '리드', '멤버']),
    bio: z.string(),
    avatar: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'events' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    attendees: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = { home, blog, docs, members, events };
