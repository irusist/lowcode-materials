import React, { useState, useEffect } from 'react';
import {Select, NumberPicker} from '@alifd/next';

export interface SelectNumberProps {
    value: string,
    onChange : any,
    selectProps: any,
    numberProps: any,
}

const SelectNumber : React.FC<SelectNumberProps> = function SelectNumber({
    value, 
    onChange,
    selectProps,
    numberProps
}) {
    const [selectValue, setSelectValue] = useState(value?.substring(0, 1));
    const [numberValue, setNumberValue] = useState(value?.substring(1));

    // useEffect(() => {
    //     if (value) {
    //         setSelectValue(value.substring(0, 1));
    //         if (value.length > 1) {
    //             setNumberValue(value.substring(1));
    //         }
    //     }
    //   }, [value]);
  
    const handleSelectChange = (val : any) => {
      setSelectValue(val);
      onChange(`${val}${numberValue || ''}`);
    };
  
    const handleNumberChange = (val : any) => {
      setNumberValue(val);
      onChange(`${selectValue || ''}${val}`);
    };
  
    return (<>
        <Select {...selectProps} value={selectValue} onChange={handleSelectChange} ></Select>
       <NumberPicker {...numberProps} value={numberValue} onChange={handleNumberChange}></NumberPicker>
        </>);
}

export default SelectNumber;