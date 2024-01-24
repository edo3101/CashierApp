import React from "react"

function ItemCard({ img_url, name, price }) {
  return (
    <a href="#">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className=" flex justify-end flex-col object-cover h-[300px] w-[320px] bg-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"
          style={{ backgroundImage: `url(${img_url})`, backgroundSize: 'cover' }}>
          <div className='flex h-1/2 justify-end flex-col bg-gradient-to-t from-black to-transparent p-3'>
            <h2 className="text-white text-lg ">
              {name}</h2>
            <h2 className="text-white text-lg ">
              {price}</h2>
          </div>

        </div>
      </div>
    </a>
  )
}
export default ItemCard
