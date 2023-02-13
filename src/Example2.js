import { Example } from "./Example";
import { useState } from "react";
import IconButton from '@mui/material/Button';
import Badge from '@mui/material/Badge';
 import  {useNavigate}  from "react-router-dom";
 import InfoIcon from '@mui/icons-material/Info';

 

export function Example2() {
    const [change, setChange]= useState(true);

    const [count, setCount] = useState(0);
     const navigate = useNavigate();

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
    // const group = ["Salim","Tamim","Tahir","Raees"]

    

    return (
        <div>
            <button onClick={()=>{
                setChange(!change)
            }}>Click Here!</button>

            {change ? <h1>Welcome</h1> : <h1>Everyone</h1>}

            {group.map((gg, index) =><Example key = {index} name={gg.name} work={gg.work}/> )}

            {/* <Example name={group[2]}/>
            <Example name="Sabkhan"/> */}

            {/* <button className="button-style"
             onClick={() =>{setCount(count + 1) 
             console.log(count)
            }}>Count {count}</button> */}

            <IconButton  className="button-style"
             onClick={() =>{setCount(count + 1) 
             console.log(count)
            }}> <Badge badgeContent={count}>👍 </Badge></IconButton>
            
           <IconButton
            onClick={() => navigate("/movies/" )}
            color="primary">
            <InfoIcon fontSize="large" />
          </IconButton> 

{/* <Badge  color="secondary">
  <👍 color="action" />
</Badge> */}

            
        </div>
    );
}
