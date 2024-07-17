export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  
  {
    name: '言覃',
    avatar: '',
    username: 'Mr-TChao',
    title: '本站作者',
    desc: '开发者，数据分析，电商运营，Python，Linux',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Mr-TChao' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['Mr-TChao', '言覃', '言覃', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['mr.tanchao@qq.com'],
  },

].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})


export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
