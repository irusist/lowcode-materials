module.exports = {
  group: '原子组件',
  componentName: 'YearPicker2',
  title: 'YearPicker',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'DatePicker',
    main: '',
    destructuring: true,
    subName: 'YearPicker',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'label',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '输入框内置标签',
    },
    {
      name: 'state',
      propType: {
        type: 'oneOf',
        value: ['success', 'loading', 'error'],
      },
      description: '输入框状态',
    },
    {
      name: 'placeholder',
      propType: 'string',
      description: '输入提示',
    },
    {
      name: 'value',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '日期值（受控）moment 对象',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '初始日期值，moment 对象',
    },
    {
      name: 'format',
      propType: 'string',
      description: '日期值的格式（用于限定用户输入和展示）',
      defaultValue: 'YYYY',
    },
    {
      name: 'disabledDate',
      propType: 'func',
      description:
        '禁用日期函数\n@param {MomentObject} 日期值\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@return {Boolean} 是否禁用',
    },
    {
      name: 'footerRender',
      propType: 'func',
      description: '自定义面板页脚\n@return {Node} 自定义的面板页脚组件',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '日期值改变时的回调\n@param {MomentObject|String} value 日期值',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '输入框尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
    },
    {
      name: 'hasClear',
      propType: 'bool',
      description: '是否显示清空按钮',
      defaultValue: true,
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '弹层显示状态',
    },
    {
      name: 'defaultVisible',
      propType: 'bool',
      description: '弹层默认是否显示',
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '弹层展示状态变化时的回调\n@param {Boolean} visible 弹层是否显示\n@param {String} reason 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发',
    },
    {
      name: 'popupTriggerType',
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '弹层触发方式',
      defaultValue: 'click',
    },
    {
      name: 'popupAlign',
      propType: 'string',
      description: '弹层对齐方式, 具体含义见 OverLay文档',
      defaultValue: 'tl tl',
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素',
    },
    {
      name: 'popupStyle',
      propType: 'object',
      description: '弹层自定义样式',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹层自定义样式类',
    },
    {
      name: 'popupProps',
      propType: 'object',
      description: '弹层其他属性',
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'inputProps',
      propType: 'object',
      description: '输入框其他属性',
    },
    {
      name: 'yearCellRender',
      propType: 'func',
    },
    {
      name: 'dateInputAriaLabel',
      propType: 'string',
      description: '日期输入框的 aria-label 属性',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容\n@param {MomentObject} value 年份',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'name',
      propType: 'string',
    },
    {
      name: 'popupComponent',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
    },
    {
      name: 'popupContent',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
        {
          name: 'prefix',
          condition: () => false,
        },
        {
          name: 'rtl',
          condition: () => false,
        },
        // {
        //   name: 'value',
        //   condition: () => false,
        // },
        {
          name: 'name',
          condition: () => false,
        },
        // {
        //   name: 'defaultValue',
        //   title: {
        //     label: '默认值',
        //     tip: 'defaultValue|初始日期值，moment 对象',
        //   },
        //   setter: 'DateSetter',
        //   supportVariable: true,
        // },
        {
          name: 'format',
          title: {
            label: '格式',
            tip: 'format|日期值的格式（用于限定用户输入和展示）',
          },
          setter: 'StringSetter',
          description: 'format|日期值的格式（用于限定用户输入和展示）',
          defaultValue: 'YYYY',
        },
        {
          name: 'placeholder',
          title: {
            label: '输入提示',
            tip: 'placeholder|输入提示',
          },
          setter: 'StringSetter',
          description: 'placeholder|输入提示',
          defaultValue: '请输入年份',
        },
        {
          name: 'size',
          title: '尺寸',
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  label: '小',
                  value: 'small',
                },
                {
                  label: '中',
                  value: 'medium',
                },
                {
                  label: '大',
                  value: 'large',
                },
              ],
            },
          },
          description: '输入框尺寸',
          defaultValue: 'medium',
        },
        {
          name: 'disabled',
          setter: 'BoolSetter',
          supportVariable: true,
          title: '是否禁用',
        },
        {
          name: 'hasClear',
          setter: 'BoolSetter',
          supportVariable: true,
          title: '清空按钮',
          defaultValue: true,
        },
        {
          name: 'followTrigger',
          setter: 'BoolSetter',
          supportVariable: true,
          title: '是否跟随滚动',
          defaultValue: false,
        },
        {
          name: 'popupTriggerType',
          title: '弹层触发方式',
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  label: 'click',
                  value: 'click',
                },
                {
                  label: 'hover',
                  value: 'hover',
                },
              ],
            },
          },
          description: '弹层触发方式',
          defaultValue: 'click',
        },
        {
          name: 'popupAlign',
          setter: 'StringSetter',
          supportVariable: true,
          title: '弹层对齐方式',
        },
        {
          name: 'form',
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
  },
  category: '信息输入',
};
