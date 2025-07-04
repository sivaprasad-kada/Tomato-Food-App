import React, { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContexts'
import { FoodItem } from '../FoodItem/FoodItem'
import './fooddisplay.css'
export const FoodDisplay = ({Category}) => {
    const {food_list} = useContext(StoreContext)
    // console.log(food_list)
  return (
    <div className='food-display-container'>
        <h2>Top dishes near you</h2>
        <div className='food-display-item'>
            {
                food_list.map((item,index)=>{
                    // console.log(Category,item.category)
                    // console.log(index)
                    if(Category === 'ALL' || Category === item.category){
                       return <FoodItem  id={index+1} key={index} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
                    }
                })
            }
        </div>
    </div>
  )
}
