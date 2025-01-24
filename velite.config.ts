import { defineConfig, s } from 'velite'

const icon = s.enum(['github', 'linkedin', 'twitter', 'globe'])

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
          icon: icon
        }))
      })
    },
    experience: {
      name: 'Experience',
      pattern: 'experience/**/*.md',
      schema: s.object({
        company: s.string(),
        companyUrl: s.string().url().optional(),
        title: s.string(),
        location: s.string(),
        startDate: s.string(),
        endDate: s.string().optional(),
        description: s.string(),
        highlights: s.array(s.string()).optional(),
        technologies: s.array(s.string()).optional()
      })
    },
    education: {
      name: 'Education',
      pattern: 'education/**/*.md',
      schema: s.object({
        institution: s.string(),
        institutionUrl: s.string().url().optional(),
        degree: s.string(),
        major: s.string(),
        location: s.string(),
        startDate: s.string(),
        endDate: s.string().optional()
      })
    },
  }
})
