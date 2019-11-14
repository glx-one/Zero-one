module.exports = {
    port: 8085,
    base: '/Zero-one/',
    evergreen: true,
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '来响的笔记',
        description: '生活如此复杂'
      }
    },
    themeConfig: {
      sidebarDepth: 3,
      locales: {
        '/': {
          label: '简体中文',
          selectText: '选择语言',
          lastUpdated: '上次编辑时间',
          sidebar: {
            '/': [
              {
                title: '基本',
                children: [
                  '/zh/home.md'
                ],
            },
              {
                title: '测试',
                children: [
                  '/zh/home.md'
                ],
            },
            ]
          }
        }
      }
    }
  }
  