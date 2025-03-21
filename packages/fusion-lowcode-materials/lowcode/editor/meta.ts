module.exports = {
  group: '原子组件',
  componentName: 'Editor',
  title: '文本编辑器',
  // configure: {
  //   component: {
  //     isContainer: true,
  //   },    
  // },
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Editor',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'height',
        setter: 'NumberSetter',
        supportVariable: true,
        description: '高度',
      },
      {
        name: 'minHeight',
        setter: 'NumberSetter',
        supportVariable: true,
        description: '最小高度',
      },
      {
        name: 'readOnly',
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否只读',
      },
      {
        name: 'fileSize',
        setter: 'NumberSetter',
        supportVariable: true,
        description: '最大文件大小',
      },
      {
        name: 'type',
        setter: 'StringSetter',
        supportVariable: true,
        description: '类型',
      },
      {
        type: 'group',
        title: '高级',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: ['onChange', 'onTextChange', 'onSelectionChange', 'setRequestOpts'],
    },
  },
  snippets: [
    {
      title: '文本编辑器',
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png',
      schema: {
        componentName: 'Editor',
        props: {
          readOnly : false,
          fileSize : 5,
          type : "url",
        },
      },
    },
  ],
  category: '信息输入',
};
