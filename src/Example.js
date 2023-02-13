import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// import { Example2 } from './Example2';

const group = [
    {
        name:"Salim",
        work:"Doctor",
    },
    {
        name:"Tamim",
        work:"Cundoctor",
    },
    {
        name:"Fahim",
        work:"Developer",
    },
    {
        name:"Tahir",
        work:"Farmer",
    },
]

export function Example(){
  
    const [name, setName]= useState("");
    const [work, setWork] =  useState("");
    const [addContent, setAddContent] = useState(group)

    return(
        <div>
            <div>
          
            <TextField 
                onChange={(e)=>setName(e.target.value)}
             label="Name" variant="outlined" />
            <TextField
                  onChange={(e)=>setWork(e.target.value)}  
            label="Work" variant="outlined" />
            <Button
                onClick={() => {
                    const newData = {
                        name:name,
                        work:work,
                    }
                 setAddContent([...addContent, newData])}}
             size='large' variant="contained">Add Content</Button>
            </div>
            </div>
        //     {addContent.map((ac, index)=>
        //         <Example key = {index} name={ac.name} work={ac.work}/> )}
        //         <h1>List of Data</h1>
        //         <TextField variant='outlined'>{name}</TextField>
        //         <TextField variant='outlined'>{work}</TextField>
        // </div>
       
    )
}

 
