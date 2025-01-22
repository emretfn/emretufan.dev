import { defineConfig, s } from 'velite'

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    clean: true,
  },
  collections: {
    profile: {
      name: 'Profile',
      pattern: 'profile/**/*.md',
      single: true,
      schema: s.object({
        name: s.string(),
        title: s.string(),
        summary: s.string(),
        location: s.string(),
        image: s.image().optional(),
        about: s.markdown(),
        social: s.array(s.object({
          platform: s.string(),
          url: s.string().url(),
          icon: s.string()
        }))
      })
    },
    experience: {
      name: 'Experience',
      pattern: 'experience/**/*.md',
      schema: s.object({
        company: s.string(),
        position: s.string(),
        location: s.string(),
        type: s.string(), // Remote, On Site, etc.
        startDate: s.isodate(),
        endDate: s.isodate().optional(),
        technologies: s.array(s.string()),
        highlights: s.array(s.string()),
        order: s.number() // for sorting
      })
    },
    skills: {
      name: 'Skills',
      pattern: 'skills/**/*.md',
      schema: s.object({
        category: s.string(),
        items: s.array(s.object({
          name: s.string(),
          level: s.number().min(1).max(5).optional(),
          icon: s.string().optional()
        })),
        order: s.number()
      })
    },
    projects: {
      name: 'Projects',
      pattern: 'projects/**/*.md',
      schema: s.object({
        title: s.string(),
        description: s.markdown(),
        technologies: s.array(s.string()),
        image: s.image().optional(),
        url: s.string().url().optional(),
        github: s.string().url().optional(),
        featured: s.boolean().default(false),
        order: s.number()
      })
    }
  }
})
