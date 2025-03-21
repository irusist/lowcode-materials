module.exports = {
  group: '原子组件',
  componentName: 'IconSelect',
  title: '按钮选择器',
  configure: {
    component: {
      isContainer: true,
    },    
  },
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'IconSelect',
    main: '',
    destructuring: true,
    subName: '',
  },
  snippets: [
    {
      title: '按钮选择器',
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png',
      schema: {
        componentName: 'IconSelect',
        props: {},
      },
    },
  ],
  category: '信息输入',
};
