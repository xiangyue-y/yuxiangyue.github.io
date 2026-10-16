// 个人资料都集中在这里，之后主要修改这一个文件即可。
export const profile = {
  name: '于祥粤',
  displayName: '于祥粤',
  title: '个人学术主页',
  initials: 'YX',
  avatar: '', // 可填入 /avatar.jpg；留空时使用姓名缩写占位图
  bio: '模仿学习 / VLA',
  location: '',
  affiliation: '西安电子科技大学',
  email: '',
  github: 'https://github.com/xiangyue-y',
  scholar: '',
  orcid: '',
  linkedin: '',
  cv: '',
  about: [
    '你好，我是于祥粤，来自西安电子科技大学。我的研究兴趣包括模仿学习（Imitation Learning）与视觉—语言—动作模型（Vision-Language-Action，VLA）。',
    '这里分享我的研究兴趣与后续进展。欢迎就相关研究与项目交流。'
  ],
  research: [
    { title: '模仿学习', subtitle: 'Imitation Learning', description: '从示范中学习行为策略，连接观察、决策与动作。' },
    { title: '视觉—语言—动作模型', subtitle: 'Vision-Language-Action', description: '连接视觉感知、语言理解与动作生成。' }
  ],
  publications: [] as { year: string; title: string; authors: string; venue: string; description: string; pdf: string; code: string }[],
  experience: [] as { period: string; role: string; organization: string; description: string }[],
  education: [
    { period: '', degree: '', organization: '西安电子科技大学' }
  ],
  news: [] as { date: string; text: string }[]
};
