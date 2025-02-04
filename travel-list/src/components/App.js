import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shoes", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  // Add a new item
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Delete a single item
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Toggle the packed status of an item
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Delete all items (clear the list)
  function handleDeleteAllItems() {
    // eslint-disable-next-line no-unused-vars
    const confirmed = window.confirm("Are you sure want to delete ? ");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItems}
        onClearList={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
