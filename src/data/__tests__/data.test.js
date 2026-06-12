import  { projects } from '../projects'
import  { skills } from '../skills'
import  { experience } from '../experience'
import { it } from 'vitest'

describe('projects data', () => {
    it('has 4 projects', () => expect(projects).toHaveLength(4))
    it('every project has required fields', () => {
        projects.forEach(p => {
            expect(p).toHaveProperty('id')
            expect(p).toHaveProperty('name')
            expect(p).toHaveProperty('pills')
            expect(Array.isArray(p.pills)).toBe(true)
        })
    })
})

describe('skills data', () => {
  it('has at least 10 skills', () => expect(skills.length).toBeGreaterThanOrEqual(10))
  it('every entry is a non-empty string', () => {
    skills.forEach(s => expect(typeof s).toBe('string'))
  })
})

describe('experience data', () => {
  it('has 3 entries', () => expect(experience).toHaveLength(3))
  it('first entry has current badge', () => expect(experience[0].badgeVariant).toBe('current'))
})