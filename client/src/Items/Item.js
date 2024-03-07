import React, { useState, useEffect, useContext } from 'react';
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { ItemContext } from '../App';


const Item = () => {

  const itemdata = [
    {
      id: 1,
      name: "fan",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      id: 2,
      name: "TV",
      price: 400,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      id: 3,
      name: "LED Light",
      price: 20,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      id: 4,
      name: "SetUp Box",
      price: 100,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      id: 5,
      name: "Charger",
      price: 200,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 150,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    },
    {
      id: 7,
      name: "Earphones",
      price: 50,
      img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816"
    }
  ];

  const [selectedItems, setSelectedItems] = useContext(ItemContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState(Array(itemdata.length).fill(0));

  useEffect(() => {

    const total = selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [selectedItems]);

  function addQuantity(index) {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);


    const existingItemIndex = selectedItems.findIndex(item => item.id === itemdata[index].id);

    if (existingItemIndex !== -1) {

      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    } else {

      const selectedItem = {
        id: itemdata[index].id,
        name: itemdata[index].name,
        price: itemdata[index].price,
        quantity: 1
      };
      setSelectedItems(prevState => [...prevState, selectedItem]);
    }
  }

  function decreaseQuantity(index) {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);

      const existingItemIndex = selectedItems.findIndex(item => item.id === itemdata[index].id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...selectedItems];
        updatedItems[existingItemIndex].quantity -= 1;
        if (updatedItems[existingItemIndex].quantity === 0) {
          updatedItems.splice(existingItemIndex, 1);
        }
        setSelectedItems(updatedItems);
      }
    }
  }

  return (
    <>
      <div className=' flex justify-between'>
        <div className=' text-2xl ml-4 mt-2  font-mono font-extrabold'>Items</div>
        <div className=' mr-4'>
          <Link to='/cart'>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-28 m-1 rounded-full">
              Items List
            </button>
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {
          itemdata.map((item, index) => {
            return (
              <div key={index} className="bg-gray-100 flex m-7 flex-wrap w-64">
                <div className="mx-auto p-9 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                  <img className="rounded-xl" src={item.img} alt="" />
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="mt-5 font-semibold">{item.name}</h1>
                      <p className="mt-2">{item.price} Rs.</p>
                    </div>
                  </div>
                  <div className='flex space-x-2 justify-center'>
                    <div>
                      <button onClick={() => addQuantity(index)} className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg"><IoMdAdd /></button>
                    </div>
                    <div>{quantities[index]}</div>
                    <div>
                      <button onClick={() => decreaseQuantity(index)} className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg"><GrFormSubtract /></button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* <div>
        {
          selectedItems.map((items1)=>{
            return(
              <ul>
                <div>Name: {items1.name}</div>
                <div> Quantity : {items1.quantity}</div>
              </ul>
            )
          })
        }
        <div> total : {totalPrice}</div>
      </div> */}

    </>
  )
}

export default Item;
