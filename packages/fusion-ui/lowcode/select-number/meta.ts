
import { wrapFormItemProps } from '../utils/form-utils';

const SelectNumberMeta = {
  componentName: "SelectNumber",
  isFormItemComponent: true,
  title: "选择数字选择器",
  group: '原子组件',
  category: '信息输入',
  docUrl: "",
  screenshot: "",
  npm: {
    package: "@alifd/fusion-ui",
    version: "{{version}}",
    exportName: "SelectNumber",
    main: "lib/index.js",
    destructuring: true,
    subName: ""
  },
  // props : [
  //   {
  //     name: "warning",
  //     description: "warning",
  //     defaultValue: true,
  //     propType: "bool",
  //   },
  //   {
  //     "name": "type",
  //     "description": "类型",
  //     propType: "string",
  //   },
  //   {
  //     name: 'onClick',
  //     propType: 'func',
  //     description: '日期值改变时的回调\n@param {MomentObject|String} value 日期值',
  //   },
  //   // {
  //   //   name: 'className',
  //   //   propType: 'string',
  //   // },
  //   // {
  //   //   name: 'style',
  //   //   propType: 'object',
  //   // },
  // ],
  configure: {
    props:  wrapFormItemProps([
      {
        title: {
          label: {
            type: 'i18n',
            en_US: "selectProps",
            zh_CN: "选择器属性"
          },
          tip: "selectProps | 选择器属性"
        },
        name: "selectProps",
        description: "选择器属性",
        setter: {
          componentName: "ObjectSetter",
          props: {
            config: {
              items: [
                {
                  name: 'placeholder',
                  title: {
                    label: '占位提示',
                    tip: '属性: placeholder',
                  },
                  defaultValue: '请选择', // 不生效
                  setter: 'StringSetter',
                },
                {
                  name: 'hasClear',
                  title: {
                    label: '清除按钮',
                    tip: '属性: hasClear',
                  },
                  setter: 'BoolSetter',
                  defaultValue: false,
                },
                {
                  name: 'showSearch',
                  title: {
                    label: '可搜索',
                    tip: '属性: showSearch',
                  },
                  setter: 'BoolSetter',
                  defaultValue: false,
                },
                {
                  name: 'dataSource',
                  display: 'block',
                  title: '选项',
                  tip: {
                    title: '数据格式',
                    url: '',
                  },
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'ArraySetter',
                          props: {
                            itemSetter: {
                              componentName: 'ObjectSetter',
                              props: {
                                config: {
                                  items: [
                                    {
                                      name: 'label',
                                      title: 'label',
                                      setter: 'StringSetter',
                                    },
                                    {
                                      name: 'value',
                                      title: 'value',
                                      setter: 'StringSetter',
                                    },
                                  ],
                                },
                              },
                              initialValue: {
                                title: 'Title',
                              },
                            },
                          },
                        },
                        'ExpressionSetter',
                      ],
                    },
                  },
                },
                {
                  name: 'mode',
                  title: {
                    label: '模式',
                    tip: '属性: mode',
                  },
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      defaultValue: 'single',
                      options: [
                        { value: 'single', title: '单选' },
                        { value: 'multiple', title: '多选' },
                        { value: 'tag', title: '标签' },
                      ],
                    },
                  },
                },
                {
                  type: 'group',
                  title: '其他配置',
                  display: 'block',
                  items: [
                    {
                      name: 'notFoundContent',
                      title: {
                        label: '空文案',
                        tip: 'notFoundContent|弹层内容为空的文案',
                      },
                      setter: 'StringSetter',
                    },
                    {
                      name: 'hasBorder',
                      title: {
                        label: '边框',
                        tip: '是否有边框',
                      },
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'autoWidth',
                      title: '下拉等宽',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'hasArrow',
                      title: '下拉箭头',
                      setter: 'BoolSetter',
                      defaultValue: true,
                    },
                  ],
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
                    },
                  ],
                },
                {
                  name: 'style',
                  setter: {
                    componentName: 'ObjectSetter',
                    initialValue: {
                      width: '30%',
                    },
                  },
                },
              ],
              extraSetter: {
                componentName: "MixedSetter",
                isRequired: false,
                props: {}
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            en_US: "numberProps",
            zh_CN: "数字选择器属性"
          },
          tip: "numberProps | 数字选择器属性"
        },
        name: "numberProps",
        description: "数字选择器属性",
        setter: {
          componentName: "ObjectSetter",
          props: {
            config: {
              items: [
                {
                  name: 'alwaysShowTrigger',
                  title: '展示操作',
                  setter: 'BoolSetter',
                  defaultValue: true,
                },
                {
                  name: 'value',
                  title: '当前值',
                  setter: ['NumberSetter', 'ExpressionSetter'],
                },
                {
                  name: 'defaultValue',
                  title: '默认值',
                  setter: ['NumberSetter', 'ExpressionSetter'],
                },
                {
                  name: 'size',
                  title: {
                    label: {
                      type: 'i18n',
                      zh_CN: '尺寸',
                      en_US: 'Size',
                    },
                    tip: {
                      type: 'i18n',
                      zh_CN: '属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大',
                      en_US: 'prop: size | description: size',
                    },
                  },
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      options: ['small', 'medium', 'large'],
                    },
                  },
                  defaultValue: 'medium',
                },
                {
                  name: 'type',
                  title: '类型',
                  defaultValue: 'normal',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              { title: '普通', value: 'normal' },
                              { title: '内联', value: 'inline' },
                            ],
                          },
                        },
                        'ExpressionSetter',
                      ],
                    },
                  },
                },
                {
                  name: 'innerAfter',
                  title: '单位',
                  setter: ['StringSetter', 'ExpressionSetter'],
                },
                {
                  name: 'step',
                  title: '步长',
                  defaultValue: 1,
                  setter: ['NumberSetter', 'ExpressionSetter'],
                },
                {
                  name: 'precision',
                  title: '小数位数',
                  defaultValue: 0,
                  setter: ['NumberSetter', 'ExpressionSetter'],
                },
                {
                  name: 'max',
                  title: '最大值',
                  setter: ['NumberSetter', 'ExpressionSetter'],
                },
                {
                  name: 'min',
                  title: '最小值',
                  setter: ['NumberSetter', 'ExpressionSetter'],
                },
                {
                  name: 'editable',
                  title: '可以输入',
                  defaultValue: true,
                  setter: ['BoolSetter', 'ExpressionSetter'],
                },
                {
                  name: 'format',
                  title: '格式化',
                  display: 'block',
                  setter: {
                    componentName: 'FunctionSetter',
                    // props: {
                    //   defaultActionName="format",
                    //   defaultCode=`function format(value) {
                    //     return value;
                    //   }`,
                    // }
                  },
                },
                {
                  name: 'onChange',
                  title: '数值被改变的事件',
                  display: 'block',
                  setter: {
                    componentName: 'FunctionSetter',
                  },
                },
                {
                  name: 'onKeyDown',
                  title: '键盘按下',
                  display: 'block',
                  setter: {
                    componentName: 'FunctionSetter',
                  },
                },
                {
                  name: 'onFocus',
                  title: '焦点获得',
                  display: 'block',
                  setter: {
                    componentName: 'FunctionSetter',
                  },
                },
                {
                  name: 'onBlur',
                  title: '焦点失去',
                  display: 'block',
                  setter: {
                    componentName: 'FunctionSetter',
                  },
                },
                {
                  name: 'onCorrect',
                  title: '数值订正后的回调',
                  display: 'block',
                  setter: {
                    componentName: 'FunctionSetter',
                  },
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
                    },
                  ],
                },
                {
                  name: 'style',
                  setter: {
                    componentName: 'ObjectSetter',
                    initialValue: {
                      width: '70%',
                    },
                  },
                },
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
    ]),
    
    "supports": {
      "style": true,
      "events": [
        {
          name: 'selectProps.onChange',
          propType: 'func',
          description: '值发生变化',
        },
        {
          name: 'selectProps.onVisibleChange',
          propType: 'func',
          description: '弹层显示隐藏变化',
        },
        {
          name: 'selectProps.onRemove',
          propType: 'func',
          description: 'Tag 被删除',
        },
        {
          name: 'selectProps.onSearch',
          propType: 'func',
          description: '搜索',
        },
        // "onXax",
      ]
    },
    "component": {}
  }
};
const snippets = [
  {
    title: "SelectNumber",
    screenshot: "",
    schema: {
      componentName: "SelectNumber",
      props: {
        selectProps: {
          placeholder: '请选择',
          mode: 'single',
          hasArrow: true,
          cacheValue: true,
          dataSource: [
            {
              value: '>',
              label: '>',
            },
            {
              value: '=',
              label: '=',
            },
            {
              value: '<',
              label: '<',
            },
          ],
        }
      }
    }
  }
];

export default {
  ...SelectNumberMeta,
  snippets
};
