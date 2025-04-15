import { getItems, addItem, deleteItem, toggleItem, clearCompleted } from "./todo_items.js";
import { renderItems } from "./todo_list_ui.js";

document.addEventListener("DOMContentLoaded", () => {
  let filter = "all";

  const form = document.querySelector(".todo-form");
  const input = form.querySelector("input[type='text']");
  const filterBtns = document.querySelectorAll(".btn-text");
  const clearBtn = document.querySelector(".button--clear");

  filterBtns.forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === "all") {
      btn.classList.add("btn-text--active");
    } else {
      btn.classList.remove("btn-text--active");
    }
  });

  renderItems(getItems(), filter);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
      addItem(text);
      renderItems(getItems(), filter);
      input.value = "";
      input.focus();
    }
  });

  document.querySelector(".todo-list").addEventListener("click", (e) => {
    if (e.target.closest(".delete-btn")) {
      const index = e.target.closest(".delete-btn").dataset.index;
      deleteItem(index);
      renderItems(getItems(), filter);
    }
    if (e.target.closest(".complete-btn")) {
      const index = e.target.closest(".complete-btn").dataset.index;
      toggleItem(index);
      renderItems(getItems(), filter);
    }
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("btn-text--active"));
      btn.classList.add("btn-text--active");
      filter = btn.textContent.trim().toLowerCase();
      renderItems(getItems(), filter);
    });
  });

  clearBtn.addEventListener("click", () => {
    clearCompleted();
    renderItems(getItems(), filter);
  });
});
