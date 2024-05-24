import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'Pinaple ', label: 'Pinaple' },
    { value: 'Rajbhog ', label: 'Rajbhog' },
  ];    
 
     export default function SelectInput() {
     let [singleSelect, setSingleSelect] = useState("chocolate");
     let [multiSelect, setmultiSelect] = useState("chocolate");
 
  
     const getSingleData = (e) => {
        setSingleSelect(e?.value);
      };

      const getMultiData = (e) => {
        let valueArr = e?.map((ele) => ele.value);
        setmultiSelect(valueArr);
      };
    return (
        <div className="">
        <h1 className='m-auto'> Flavour:{singleSelect}</h1>
        <Select
         Val = {{ value: singleSelect, label: singleSelect }} 
           onChange={(e)=>getSingleData(e)}
           className="m-auto w-50"
          options={options}
        />
        {/* Multi Input*/}
        <h1 className='m-auto'> Flavour:{multiSelect}</h1>

        <Select
        isMulti
        value={multiSelect?.map?.((obj) => {
          return { value: obj, label: obj };
        })}
           onChange={(e)=>getMultiData(e)}
           className="m-auto w-50"
          options={options}
        />
      </div>
  )
}
