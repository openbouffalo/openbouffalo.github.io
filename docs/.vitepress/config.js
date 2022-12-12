export default {
  title: 'OpenBouffalo',
  description: 'Wiki for Bouffalo chips.',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/OpenBouffalo/openbouffalo.github.io/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Chips', link: '/chips/' },
    ],
    sidebar: {
      '/chips/': [
        {
          text: 'Common',
          items: [
            { text: 'Boot Header', link: '/chips/boot-header' },
          ]
        },
        {
          text: 'BL70X',
          items: [
            { text: 'eFuse', link: '/chips/bl70x/efuse' },
            { text: 'Errata', link: '/chips/bl70x/errata' },
          ]
        }
      ]
    }
  }
}