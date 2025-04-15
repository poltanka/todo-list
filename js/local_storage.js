export function loadItems() {
  return JSON.parse(localStorage.getItem("todoItems")) || [];
}

export function saveItems(items) {
  localStorage.setItem("todoItems", JSON.stringify(items));
}
