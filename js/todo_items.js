import { loadItems, saveItems } from "./local_storage.js";

let items = loadItems();

export function getItems() {
  return items;
}

export function addItem(text) {
  items.push({ text, completed: false });
  saveItems(items);
}

export function deleteItem(index) {
  items.splice(index, 1);
  saveItems(items);
}

export function toggleItem(index) {
  items[index].completed = !items[index].completed;
  saveItems(items);
}

export function clearCompleted() {
  items = items.filter(item => !item.completed);
  saveItems(items);
}
