import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const Item = () => {

  const itemdata = [
    {
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    }
  ];

  // Create an array to store quantities for each item, initialized with 0
  const [quantities, setQuantities] = useState(Array(itemdata.length).fill(0));

  function addQuantity(index) {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  }

  function decreaseQuantity(index) {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  }

  return (
    <>
      <div className=' text-center text-2xl font-mono font-extrabold'>Items</div>
      <div className=' flex flex-wrap '>
        {
          itemdata.map((item, index) => {
            return (
              <div key={index} className=" bg-gray-100 flex m-7  flex-wrap w-64">
                <div className=" mx-auto p-9 bg-white  rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                  <img className="rounded-xl" src={item.img} alt="" />
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="mt-5  font-semibold">{item.name}</h1>
                      <p className="mt-2">{item.price}</p>
                    </div>
                  </div>
                  <div className='flex space-x-2 justify-center'>
                    <div>
                      <button onClick={() => addQuantity(index)} className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg  "><IoMdAdd /></button>
                    </div>
                    <div>{quantities[index]}</div>
                    <div>
                      <button onClick={() => decreaseQuantity(index)} className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg  "><GrFormSubtract /></button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Item;
