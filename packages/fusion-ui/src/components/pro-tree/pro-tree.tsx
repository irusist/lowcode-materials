import React, { useState, useEffect, useMemo } from 'react';
import {Checkbox, Tree} from '@alifd/next';

export interface ProTreeProps {
    value: Array<any>,
    onChange : any,
    props: any,
    dataSource : any,
    defaultExpandAll: boolean,
    checkStrictly: boolean,
    showLine: boolean,
    multiple: boolean,
    editable: boolean,
    draggable: boolean,
    selectable: boolean,
    style: any,
    onSelect: (selectedKeys: string[], extra: Record<string, any>) => void,
    onCheck: (checkedKeys: string[], extra: Record<string, any>) => void,
    onExpand: (expandedKeys: string[], extra: Record<string, any>) => void,
    onChangeCheckStrictly: (checkStrictly: boolean) => void,
    indeterminateKeys: (keys: any) => void,
}

const getAllKeys = (data: any) => {
  if (!data) {
    return [];
  }
  let keys : any[] = [];
  data.forEach((node: any) => {
    keys.push(node.key);
    if (node.children) {
      keys = keys.concat(getAllKeys(node.children));
    }
  });
  return keys;
};

const calculateIndeterminateKeys = (data:Array<any>, checkedKeys: any[]) => {
  const indeterminateKeys = new Set();

  const checkIndeterminate = (node : any) => {
    if (node.children) {
      const childChecked = node.children.map((child : any) => checkIndeterminate(child));
      if (childChecked.some((isChecked : boolean) => isChecked)) {
        indeterminateKeys.add(node.key);
      }
      return indeterminateKeys.has(node.key);
    }
    return checkedKeys.includes(node.key);
  };

  data.forEach((node) => checkIndeterminate(node));

  return Array.from(indeterminateKeys);
};

const ProTree : React.FC<ProTreeProps> = function ProTree({
    value, 
    onChange,
    dataSource,
    defaultExpandAll,
    checkStrictly,
    onChangeCheckStrictly,
    indeterminateKeys,
    ...otherProps
}) {
    // const [selectValue, setSelectValue] = useState(value?.substring(0, 1));
    // const [numberValue, setNumberValue] = useState(value?.substring(1));

    // const [selectValue, setSelectValue] = useState(value || []);

    useEffect(() => {
        if (value) {
          setCheckedKeys(value);
        } else {
          setCheckedKeys([]);
        }
    }, [value]);
  
    // const handleSelectChange = (val : any) => {
    //   setSelectValue(val);
    //   onChange && onChange(`${val || ''}${numberValue || ''}`);
    // };
  
    // const handleNumberChange = (val : any) => {
    //   setNumberValue(val);
    //   onChange && onChange(`${selectValue || ''}${val || ''}`);
    // };


    const [checkedKeys, setCheckedKeys] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [checkStrictlyInternal, setCheckStrictlyInternal] = useState(checkStrictly);

    const allKeys = useMemo(() => getAllKeys(dataSource), [dataSource]);

    useEffect(() => {
        setCheckStrictlyInternal(checkStrictly);
    }, [checkStrictly]);

    useEffect(() => {
      if (defaultExpandAll) {
        handleExpandChange(true);
      }
  }, [defaultExpandAll, allKeys]);


    // 处理选择变化
    const handleCheck = (keys: any, extra : any) => {
      if (otherProps.onCheck) {
        otherProps.onCheck(keys, {});
      }
      setCheckedKeys(keys);
      onChange && onChange(keys);
      indeterminateKeys && indeterminateKeys(extra.indeterminateKeys)
    };

    // 控制展开和折叠的复选框
    const handleExpandChange = (checked: boolean) => {
      if (checked) {
        setExpandedKeys(allKeys);
      } else {
        setExpandedKeys([]);
      }
    };

    // 控制全选和全不选的复选框
    const handleSelectAllChange = (checked: boolean) => {
      if (checked) {
        setCheckedKeys(allKeys);
      } else {
        setCheckedKeys([]);
      }
    };

    // 控制父子联动复选框
    const handleCheckStrictlyChange = (checked: boolean) => {
      if (onChangeCheckStrictly) {
        onChangeCheckStrictly(!checked);
      } else {
        setCheckStrictlyInternal(!checked);
      }

      if (checked) {
        const halfKeys = calculateIndeterminateKeys(dataSource, checkedKeys);
        indeterminateKeys && indeterminateKeys(halfKeys);
      } else {
        indeterminateKeys && indeterminateKeys([]);
      }
    };

    return (
      <div style={{...otherProps.style}}>
      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Checkbox checked={expandedKeys.length === allKeys.length} onChange={handleExpandChange}>
          展开/折叠
        </Checkbox>
        <Checkbox checked={checkedKeys.length === allKeys.length} onChange={handleSelectAllChange}>
          全选/全不选
        </Checkbox>
        <Checkbox checked={!checkStrictlyInternal} onChange={handleCheckStrictlyChange}>
          父子联动
        </Checkbox>
      </div>
      <Tree
        style={{
          border: '1px solid #d9d9d9',
          padding: '10px',
          borderRadius: '4px',
        }}
        checkable
        autoExpandParent={false}
        dataSource={dataSource}
        checkedKeys={checkedKeys}
        expandedKeys={expandedKeys}
        onCheck={handleCheck}
        checkStrictly={checkStrictlyInternal} 
        onExpand={(keys) => {
          if (otherProps.onExpand) {
            otherProps.onExpand(keys, {});
          }
          setExpandedKeys(keys);
        }}
        showLine = {otherProps.showLine}
        multiple = {otherProps.multiple}
        editable = {otherProps.editable}
        draggable = {otherProps.draggable}
        selectable = {otherProps.selectable}
        onSelect= {otherProps.onSelect}
      />
    </div>
    );
}

export default ProTree;