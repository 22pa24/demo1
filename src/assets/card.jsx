/*import './card.css'
import { useState } from 'react'
//import axios from 'axios'
const Card=(props)=>{
    const [name,setName]=useState('  sneha')
        const greeting=  '  react ';
   //console.log("props",props)
   const updateName=(value)=>{setName(value)}
   

    return(
        <>
       <h1>Hii {props.name}{name}</h1> 
       <button onClick ={()=>setName('  kutty')}>
        default name
       </button>
       
       <button onClick ={()=>updateName('  sneha')}>
       updateName
       </button>
     
        </>
    )
}
export default Card*/ 
import axios from "axios"
import { useState } from "react"
const Card=(props)=>{
    const[name,setName]=useState([])
    const GetData= async()=>{
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('data',data.data)
    setName(data.data)
}
return(
    <>
    <button onClick={()=>GetData()}>get data</button>
    {
        name.map((value)=>{return<p>{value.title}</p>})
    }
    <input type="text"onChange={(e)=>console.log(e.target.value)}/>
    </>
)
}
export default Card