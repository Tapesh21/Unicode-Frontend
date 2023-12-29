import React from 'react'
import HomeCarousel from '../Customer/Components/Carousel/HomeCarousel'
//import Banner from '../Customer/Components/Banner/Banner'
import HomeSectionCarosel from '../Customer/Components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../Data/Uniform/mens_kurta'


const HomePage = () => {
  return (
    <div>
       
        <HomeCarousel/>
        
        <div  className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
           <HomeSectionCarosel data={mens_kurta} section={"Mens kurta"} />
           <HomeSectionCarosel data={mens_kurta} section={"Mens kurta"}/>
           <HomeSectionCarosel  data={mens_kurta} section={"Mens kurta"}/>
           <HomeSectionCarosel data={mens_kurta} section={"Mens kurta"}/>
           <HomeSectionCarosel data={mens_kurta} section={"Mens kurta"}/>
           <HomeSectionCarosel data={mens_kurta} section={"Mens kurta"}/>
           <HomeSectionCarosel data={mens_kurta} section={"Mens kurta"}/>

        </div>
        
        
    </div>
  )
}

export default HomePage