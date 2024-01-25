import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://j33h22.github.io',
  lang: 'zh-CN',
  title: 'Ju33Huang22的空间',
  subtitle: '',
  author: {
    name: 'Ju33Huang22',
    avatar: 'https://github.com/j33h22.png',
    status: {
      emoji: '😊',
    },
  },
  favicon: 'https://github.com/j33h22.png',
  description: '分享我的感受。',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/j33h22',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Ju33Huang22',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    }, 
    {
      name: 'E-Mail',
      link: 'mailto:ju33huang22@proton.me',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
