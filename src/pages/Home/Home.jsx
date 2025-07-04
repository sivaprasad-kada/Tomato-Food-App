import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../components/header/Header'
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu'
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay'
import { Footer } from '../../components/Footer/Footer'
import { AppDownload } from '../../components/appDownload/AppDownload'
export const Home = () => {
  const[Category,setCategory] = useState('ALL');
  return (
    <div>
      <Header/>
      <ExploreMenu Category = {Category} setCategory={setCategory}/>
      <FoodDisplay Category = {Category}/>
      <AppDownload/>
    </div>
  )
}
