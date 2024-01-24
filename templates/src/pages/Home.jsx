import React from "react";
import ItemCard from "../components/ItemCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const ItemURL = "http://localhost:5000/item/items";

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleItemClick = (id, name, price) => {
    const isItemSelected = selectedItems.some(item => item.id === id);

    if (!isItemSelected) {
      setSelectedItems([...selectedItems, { id, name, price, quantity: 1 }]);
    }
  };
  function renderItemsResults() {
    return (
      <>
        {
          items.map(item => (
            <div key={item.id} onClick={() => handleItemClick(item.id, item.name, item.price)}>
              <ItemCard key={item.id} id={item.id} img_url={item.img_url} name={item.name} price={item.price} />
            </div>))}
      </ >
    );
  }

  useEffect(() => {
    axios.get(ItemURL).then((response) => {
      setItems(response.data);
      console.log(selectedItems)
    });


  }, []);

  // const [quantity, setQuantity] = useState(1);

  // const handleIncrement = () => {
  //   setQuantity(prevCount => prevCount + 1)
  // };
  //
  // const handleDecrement = () => {
  //   setQuantity(prevCount => prevCount - 1)
  // };
  const handleIncrement = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((selectedItem) =>
        selectedItem.id === id ? { ...selectedItem, quantity: selectedItem.quantity + 1 } : selectedItem
      )
    );
  };

  const handleDecrement = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((selectedItem) =>
        selectedItem.id === id && selectedItem.quantity > 0
          ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
          : selectedItem
      )
    );
  };

  function totalPriceHandler() {
    let totalPrice = 0;

    selectedItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    })
    return totalPrice
  }

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-2 overflow-y-scroll h-screen">
          <div className='flex flex-row gap-8 flex-wrap px-5 py-5'>
            {items.length > 0 && renderItemsResults()}
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
            <h1 className="font-bold text-2xl my-4 text-center text-blue-600">KRP Services</h1>
            <div className="mb-2">
              <div className="flex justify-between mb-6">
                <h1 className="text-lg font-bold">Invoice</h1>
                <div className="text-gray-700">
                  <div>Date: 01/05/2023</div>
                  <div>Invoice #: INV12345</div>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4">Bill To:</h2>
                <div className="text-gray-700 mb-2">John Doe</div>
                <div className="text-gray-700 mb-2">123 Main St.</div>
                <div className="text-gray-700 mb-2">Anytown, USA 12345</div>
                <div className="text-gray-700">johndoe@example.com</div>
              </div>
              <table className="w-full mb-8">
                <thead>
                  <tr>
                    <th className="text-left font-bold text-gray-700">Item</th>
                    <th className="text-right font-bold text-gray-700">Quantity</th>
                    <th className="text-right font-bold text-gray-700">Price</th>
                    <th className="text-right font-bold text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedItems.map(selectedItem => {
                    return (
                      <tr key={selectedItem.id}>
                        <td className="text-left text-gray-700">{selectedItem.name} </td>
                        <td className="text-left text-gray-700">
                          <div className="input-group">
                            <button type="button" onClick={() => handleDecrement(selectedItem.id)} className="input-group-text">-</button>
                            <div className="form-control text-center"> {selectedItem.quantity}</div>
                            <button type="button" onClick={() => handleIncrement(selectedItem.id)} className="input-group-text">+</button>
                          </div>
                        </td>
                        <td className="text-right text-gray-700">Rp.{selectedItem.price}</td>
                        <td className="text-right text-gray-700">Rp.{selectedItem.price * selectedItem.quantity}</td>
                      </tr>)
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="text-left font-bold text-gray-700"></td>
                    <td className="text-left font-bold text-gray-700">Sub Total</td>
                    <td className="text-right font-bold text-gray-700">Rp.{totalPriceHandler()}</td>
                  </tr>
                </tfoot>
              </table>
              <div className="text-gray-700 mb-2">Thank you for your business!</div>
              <div className="text-gray-700 text-sm">Please remit payment within 30 days.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
