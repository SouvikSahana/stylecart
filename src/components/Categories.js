import React from 'react'
import "./Categories.css"

const data=[
    {
        id:"1",
        name:"Office/ Formal",
    },
    {
        id:"2",
        name:"Party",
    },
    {
        id:"3",
        name:"Casual",
    },
    {
        id:"4",
        name:"Fitness",
    },
    {
        id:"5",
        name:"Traditional",
    },
    {
        id:"6",
        name:"Winter",
    },
    {
        id:"7",
        name:"Weekend",
    },
]
const CategoryComponent=({name})=>{
    return ( <div className='categoryComponent'>
        {name}
    </div>)
}

const Categories = () => {
  return (
    <div className='categories'>
        {data.map((data)=><CategoryComponent key={data.id} name={data.name}/>)}
    </div>
  )
}

export default Categories