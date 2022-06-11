
import React from 'react'
import ListItem from './ListItem'
import './styles.css'

export default function List({list})
 {
  return (
    <div className='list-wrap'>
    {list.map((item)=><ListItem key={item.id} item = {item}/>)}
   
    </div>
  )
}
