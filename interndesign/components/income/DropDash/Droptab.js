import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Droptab(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>

      {/* <label for="underline_select" className="sr-only">Underline select</label> */}
      <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none peer">
        <option selected value={props.sel}>{props.sel}</option>
        {
          props.data.map(item=>(
            <option key={item.op} value={item.op}>{item.op}</option>
          ))
        }
        
      
      </select>

    </div>
  );
}
