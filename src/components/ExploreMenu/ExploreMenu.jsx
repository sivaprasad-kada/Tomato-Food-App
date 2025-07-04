import React, { useState } from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'
export const ExploreMenu = ({Category,setCategory}) => {
    // const [activeIndex ,setActiveIndex] = useState(null); // i give another logic with gobal 
    // // declaration of acive which add class to all div once i click one div
    // console.log(activeIndex)
    // console.log(Category)
  return (
    <div className='exploremenu' id='menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes. 
        Our mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time</p>
        <div className="explore-menu-list">
            {
                menu_list.map((menu_item,index)=>{
                    return(
                        // setcategory logic is nice logic
                        <div onClick={()=>setCategory(prev => prev === menu_item.menu_name ?'ALL':menu_item.menu_name)} className={`menu-item`} key={index}>
                            <img src={menu_item.menu_image} className={`${Category===menu_item.menu_name ? 'active' : ''}`} ></img>
                            <p>{menu_item.menu_name}</p>
                        </div>
                    )
                })  
            }
        </div>
        <hr></hr>
        {/* {
            menu_list.map((menu_item)=> <img src={menu_item.menu_image} alt='menuItem'></img>)
        } */}
    </div>
  )
}
