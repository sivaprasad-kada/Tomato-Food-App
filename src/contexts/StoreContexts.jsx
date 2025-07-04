import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
// console.log("food_list inside provider:", food_list);
export const StoreContext = createContext();
const StorecontextProvider = (props) => {
    // usex`State hook is to be used in function only
    const [cartItem, setCartItem] = useState({})
    console.log(cartItem);
    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItem) {
            console.log("cartItem:", cartItem);
            console.log("item key:", item);
            console.log("food_list IDs:", food_list.map(f => f._id));

            console.log("item key :", typeof (item));
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => {
                    console.log('productId', typeof (product._id))
                    return (product._id) === item
                });
                console.log("itemInfo", itemInfo);
                if(itemInfo){
                   TotalAmount += itemInfo.price * cartItem[item] 
                }                
            }
        }
        return TotalAmount;
    }
    const contextValue = {
        food_list,
        cartItem, setCartItem, addToCart, removeFromCart, getTotalCartAmount
    }
    return (
        // i didn't understand why we write this provider code i want to once explore indepth  about this
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StorecontextProvider;