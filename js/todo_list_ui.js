export function renderItems(items, filter) {
  const todoList = document.querySelector(".todo-list");
  const footer = document.querySelector(".todo-footer");
  todoList.innerHTML = "";

  if (items.length === 0) {
    todoList.innerHTML = '<div class="todo-list-empty">Add your first task!</div>';
    footer.classList.add("hidden");
    return;
  } else {
    footer.classList.remove("hidden");
  }


  const filteredItems = items.filter(item =>
    filter === "all" ? true : item.completed
  );

  filteredItems.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("todo-item");
    if (item.completed) itemElement.classList.add("completed");

    itemElement.innerHTML = `
      <div class="todo-item__content">${item.text}</div>
      <div class="todo-item__actions">
        <button type="button" class="btn delete-btn" data-index="${index}" aria-label="Delete">
          <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8406 5.37512H2.15936C1.68014 5.37512 1.29166 5.76361 1.29166 6.24283V13.1876C1.29166 14.6259 2.45758 15.7918 3.89582 15.7918H9.10416C9.79483 15.7918 10.4572 15.5174 10.9456 15.029C11.434 14.5407 11.7083 13.8783 11.7083 13.1876V6.24283C11.7083 5.76361 11.3198 5.37512 10.8406 5.37512Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.625 3.29173L9.51458 3.07194C8.94365 1.9298 7.77637 1.20831 6.49948 1.20831C5.22259 1.20831 4.05531 1.9298 3.48437 3.07194L3.375 3.29173H9.625Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.51353 8.84696C5.51353 8.43274 5.17775 8.09696 4.76353 8.09696C4.34932 8.09696 4.01353 8.43274 4.01353 8.84696H5.51353ZM4.01353 12.3188C4.01353 12.733 4.34932 13.0688 4.76353 13.0688C5.17775 13.0688 5.51353 12.733 5.51353 12.3188H4.01353ZM8.98645 8.84696C8.98645 8.43274 8.65066 8.09696 8.23645 8.09696C7.82223 8.09696 7.48645 8.43274 7.48645 8.84696H8.98645ZM7.48645 12.3188C7.48645 12.733 7.82223 13.0688 8.23645 13.0688C8.65066 13.0688 8.98645 12.733 8.98645 12.3188H7.48645ZM9.62499 2.54175C9.21078 2.54175 8.87499 2.87753 8.87499 3.29175C8.87499 3.70596 9.21078 4.04175 9.62499 4.04175V2.54175ZM11.7083 4.04175C12.1225 4.04175 12.4583 3.70596 12.4583 3.29175C12.4583 2.87753 12.1225 2.54175 11.7083 2.54175V4.04175ZM3.37499 4.04175C3.7892 4.04175 4.12499 3.70596 4.12499 3.29175C4.12499 2.87753 3.7892 2.54175 3.37499 2.54175V4.04175ZM1.29166 2.54175C0.877443 2.54175 0.541656 2.87753 0.541656 3.29175C0.541656 3.70596 0.877443 4.04175 1.29166 4.04175V2.54175ZM4.01353 8.84696V12.3188H5.51353V8.84696H4.01353ZM7.48645 8.84696V12.3188H8.98645V8.84696H7.48645ZM9.62499 4.04175H11.7083V2.54175H9.62499V4.04175ZM3.37499 2.54175H1.29166V4.04175H3.37499V2.54175Z" fill="currentColor"/>
          </svg>
        </button>
        <button type="button" class="btn complete-btn" data-index="${index}" aria-label="Complete">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20834 8.50017C1.20859 5.02152 3.6661 2.02747 7.07795 1.34905C10.4898 0.670623 13.9058 2.49678 15.2368 5.71072C16.5678 8.92465 15.4432 12.6313 12.5507 14.5637C9.6582 16.4962 5.80341 16.1163 3.34376 13.6564C1.97634 12.2889 1.2082 10.4341 1.20834 8.50017Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.85419 8.50015L7.2844 10.9304L12.1459 6.06995" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    `;
    todoList.appendChild(itemElement);
  });
}
