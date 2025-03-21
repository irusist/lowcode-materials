import React, { useEffect, useState } from 'react';
import { Select, Input } from '@alifd/next';
import { default as ProIcon } from '../pro-icon';

export interface IconSelectorProps {
  value: string,
  onChange : any,   
}

const iconOptions = [
  { name: '404', icon: 'a-404' },
  { name: 'bug', icon: 'bug' },
  { name: 'build', icon: 'build' },
  { name: 'button', icon: 'button' },
  { name: 'cascader', icon: 'cascader' },
  { name: 'chart', icon: 'chart' },
  { name: 'checkbox', icon: 'checkbox' },
  { name: 'client', icon: 'client' },
  { name: 'clipboard', icon: 'clipboard' },
  { name: 'code', icon: 'code' },
  { name: 'color', icon: 'color' },
  { name: 'component', icon: 'component' },
  { name: 'dashboard', icon: 'dashboard' },
  { name: 'date-range', icon: 'date-range' },
  { name: 'date', icon: 'date' },
  { name: 'dict', icon: 'dict' },
  { name: 'documentation', icon: 'documentation' },
  { name: 'download', icon: 'download' },
  { name: 'drag', icon: 'drag' },
  { name: 'druid', icon: 'druid' },
  { name: 'edit', icon: 'edit' },
  { name: 'education', icon: 'education' },
  { name: 'email', icon: 'email' },
  { name: 'example', icon: 'example' },
  { name: 'excel', icon: 'excel' },
  { name: 'exit-fullscreen', icon: 'exit-fullscreen' },
  { name: 'eye-open', icon: 'eye-open' },
  { name: 'eye', icon: 'eye' },
  { name: 'form', icon: 'form' },
  { name: 'fullscreen', icon: 'fullscreen' },
  { name: 'github', icon: 'github' },
  { name: 'guide', icon: 'guide' },
  { name: 'icon', icon: 'icon' },
  { name: 'input', icon: 'input' },
  { name: 'international', icon: 'international' },
  { name: 'job', icon: 'job' },
  { name: 'language', icon: 'language' },
  { name: 'link', icon: 'link' },
  { name: 'list', icon: 'list' },
  { name: 'lock', icon: 'lock' },
  { name: 'log', icon: 'log' },
  { name: 'logininfor', icon: 'logininfor' },
  { name: 'message', icon: 'message' },
  { name: 'money', icon: 'money' },
  { name: 'monitor', icon: 'monitor' },
  { name: 'nacos', icon: 'nacos' },
  { name: 'nested', icon: 'nested' },
  { name: 'number', icon: 'number' },
  { name: 'online', icon: 'online' },
  { name: 'password', icon: 'password' },
  { name: 'pdf', icon: 'pdf' },
  { name: 'people', icon: 'people' },
  { name: 'peoples', icon: 'peoples' },
  { name: 'phone', icon: 'phone' },
  { name: 'post', icon: 'post' },
  { name: 'qq', icon: 'qq' },
  { name: 'question', icon: 'question' },
  { name: 'radio', icon: 'radio' },
  { name: 'rate', icon: 'rate' },
  { name: 'row', icon: 'row' },
  { name: 'search', icon: 'search' },
  { name: 'select', icon: 'select' },
  { name: 'sentinel', icon: 'sentinel' },
  { name: 'server', icon: 'server' },
  { name: 'shopping', icon: 'shopping' },
  { name: 'size', icon: 'size' },
  { name: 'skill', icon: 'skill' },
  { name: 'slider', icon: 'slider' },
  { name: 'star', icon: 'star' },
  { name: 'swagger', icon: 'swagger' },
  { name: 'switch', icon: 'switch' },
  { name: 'system', icon: 'system' },
  { name: 'tab', icon: 'tab' },
  { name: 'table', icon: 'table' },
  { name: 'textarea', icon: 'textarea' },
  { name: 'theme', icon: 'theme' },
  { name: 'time-range', icon: 'time-range' },
  { name: 'time', icon: 'time' },
  { name: 'tool', icon: 'tool' },
  { name: 'tree-table', icon: 'tree-table' },
  { name: 'tree', icon: 'tree' },
  { name: 'upload', icon: 'upload' },
  { name: 'user', icon: 'user' },
  { name: 'validCode', icon: 'validCode' },
  { name: 'wechat', icon: 'wechat' },
  { name: 'zip', icon: 'zip' },
  // 添加更多图标
];

const IconSelector : React.FC<IconSelectorProps> = function IconSelector({
  value, 
  onChange,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [visible, setVisible] = useState(false); // 控制弹出层的可见性

  useEffect(() => {
    if (value) {
      const icon = iconOptions.filter(option => option.name === value)
      if (icon && icon.length > 0) {
        setSelectedIcon(icon[0]);
      }
    }
  }, [value]);

  const filteredOptions = iconOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
    setVisible(false); // 关闭弹出层
    onChange(icon.icon);
  };

  return (
    <Select
      placeholder="点击选择图标"
      value={selectedIcon}
      visible={visible}
      onVisibleChange={setVisible} // 控制弹出层的可见性
      onChange={(value) => setSelectedIcon(value)}
      style={{width: '460px'}}
      popupContent={
        <div style={{ padding: '16px', backgroundColor: '#fff' , display: 'flex', flexDirection: 'column', height: '200px'}}>
          <div
            style={{
              flexShrink: 0,
              marginBottom: '12px',
            }}
          >
            <Input
              placeholder="请输入图标名称"
              value={searchTerm}
              onChange={(value) => setSearchTerm(value)}
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{
              flexGrow: 1,
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              {filteredOptions.map((icon) => (
                <div
                  key={icon.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    backgroundColor: selectedIcon?.name === icon.name ? '#e6f7ff' : 'transparent',
                  }}
                  onClick={() => handleSelectIcon(icon)} // 选择后关闭弹出层
                >
                  <ProIcon type={'icon-ruoyi-' + icon.icon} style={{ marginRight: '4px' }} />
                  <span>{icon.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      valueRender={(value) => (
        value && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProIcon type={'icon-ruoyi-' + value.icon} style={{ marginRight: '8px' }} />
            <span>{value.name}</span>
          </div>
        )
      )}
    />
  );
};

export default IconSelector;
