// Edit this file to update your personal information and academic content.
export const profile = {
  name: 'Xiangyue Yu',
  displayName: 'Xiangyue Yu',
  title: 'Academic Homepage',
  initials: 'XY',
  avatar: '', // e.g. /avatar.jpg; leave blank to display initials
  bio: 'Imitation Learning / VLA',
  location: '',
  affiliation: 'Xidian University',
  email: '',
  github: 'https://github.com/xiangyue-y',
  scholar: '',
  orcid: '',
  linkedin: '',
  cv: '',
  about: [
    'Hello, I am Xiangyue Yu from Xidian University. My research interests include imitation learning and vision-language-action (VLA) models.',
    'I share my research interests and updates here. Feel free to reach out to discuss related research and projects.'
  ],
  research: [
    { title: 'Imitation Learning', subtitle: 'Learning from Demonstrations', description: 'Learning behavior policies from demonstrations, connecting observation, decision-making, and action.' },
    { title: 'Vision-Language-Action', subtitle: 'VLA Models', description: 'Connecting visual perception, language understanding, and action generation.' }
  ],
  publications: [] as { year: string; title: string; authors: string; venue: string; description: string; pdf: string; code: string }[],
  experience: [] as { period: string; role: string; organization: string; description: string }[],
  education: [
    { period: '', degree: '', organization: 'Xidian University' }
  ],
  news: [] as { date: string; text: string }[]
};
