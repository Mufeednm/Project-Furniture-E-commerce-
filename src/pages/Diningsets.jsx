import React from 'react'
import { useNavigate } from 'react-router-dom'
const Diningsets = () => {
  const nav =useNavigate()
  return (
    <div>Diningsets
 <figure className="relative max-w-5xl transition-all duration-500">
        <a href="#">
          <img
            className="max-w-screen-2xl"
            src="https://www.houzlook.com/assets/images/blocks/categories/Dining.jpg"
            alt="image description"
            onClick={()=>nav(`/${e.id}`)}
          />
        </a>
        <figcaption className="absolute px-7 text-lg text-black bottom-6 w-full text-justify">
          <p>Beds of Dream </p>
        </figcaption>
      </figure>


    </div>
  )
}

export default Diningsets