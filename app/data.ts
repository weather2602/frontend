type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: "Sketch 1",
    description: "A collection of my personal sketches displayed in a Next.js app with Kubernetes.",
    link: "http://localhost:3000",
    video: "sketches\\1.jpg",
    id: "project1",
  },
  {
    name: "Sketch 2",
    description: "Another sketch from my collection.",
    link: "http://localhost:3000",
    video: "sketches\\2.jpg",
    id: "project2",
  },
  {
    name: "Sketch 3",
    description: "Another sketch from my collection.",
    link: "http://localhost:3000",
    video: "sketches\\3.jpg",
    id: "project3",
  },
  {
    name: "Sketch 4",
    description: "Another sketch from my collection.",
    link: "http://localhost:3000",
    video: "sketches\\4.jpg",
    id: "project4",
  },
  {
    name: "Sketch 5",
    description: "Another sketch from my collection.",
    link: "http://localhost:3000",
    video: "sketches\\5.jpg",
    id: "project5",
  },
  {
    name: "Sketch 6",
    description: "Another sketch from my collection.",
    link: "http://localhost:3000",
    video: "sketches\\6.jpg",
    id: "project6",
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Huware',
    title: 'Data Engineer',
    start: 'September 2023',
    end: 'Present',
    link: 'https://.com',
    id: 'work1',
  },
  {
    company: 'Ali Big S.R.L.',
    title: 'Data Scientist',
    start: 'April 2022',
    end: 'May 2023',
    link: 'https://.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'My journey creating a Next.js app with Kubernetes to showcase my sketches.',
    link: '/blog/sketch-gallery',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/weather2602',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raghavnishant/',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/',
  },
]

export const EMAIL = 'your@email.com'
