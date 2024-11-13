const plainData = 'children\n\t123\n\t*[ashbin]333\n\t-222';

export default [
  {
    title: '高级树形控件',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tree.png',
    schema: {
      componentName: 'ProTree',
      props: {
        prefix: 'next-',
        selectable: true,
        defaultExpandAll: false,
        checkedStrategy: 'all',
        checkStrictly: false,
        autoExpandParent: false,
        animation: true,
        focusable: true,
        plainData,
        style: {width: '280px'},
      },
    },
  },
];
