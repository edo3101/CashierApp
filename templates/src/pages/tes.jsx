import React, { useState } from 'react';

const Tes = () => {
  // State to keep track of selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Dummy item data (you can replace this with your actual data)
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  // Function to handle item click
  const handleItemClick = (id, name, price) => {
    // Check if the item is already selected
    const isItemSelected = selectedItems.some(item => item.id === id);

    // If not selected, add it to the selectedItems state
    if (!isItemSelected) {
      setSelectedItems([...selectedItems, { id, name, price }]);
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => handleItemClick(item.id, item.name, item.price)}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      <h2>Selected Items</h2>
      <ul>
        {selectedItems.map(selectedItem => (
          <li key={selectedItem.id}>
            {selectedItem.name} - ${selectedItem.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tes;

