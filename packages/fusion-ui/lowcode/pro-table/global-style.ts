export const globalStyleField = {
  type: 'group',
  title: '全局样式',
  name: 'globalStyle',
  extraProps: {
    display: 'accordion',
    defaultCollapsed: true,
  },
  items: [
    {
      name: 'hasBorder',
      title: '列分隔线',
      display: 'inline',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'isZebra',
      title: '斑马线',
      display: 'inline',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'fixedHeader',
      title: '固定表头',
      display: 'inline',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'maxBodyHeight',
      title: '最大内容高度',
      display: 'inline',
      // condition: (target) => {
      //   return target.getProps().getPropValue('fixedHeader') === true;
      // },
      setter: 'NumberSetter',
    },

    {
      name: 'size',
      title: '密度',
      display: 'inline',
      defaultValue: 'medium',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '紧凑',
              value: 'small',
              tip: 'small',
            },
            {
              title: '正常',
              value: 'medium',
              tip: 'medium',
            },
          ],
        },
      },
    },
  ],
};
