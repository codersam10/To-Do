const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

//for capturing the text typed 
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

//adding captured text to newly created list item
const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;

    //marking the list item done
    listItem.addEventListener("click", function(){
        this.classList.toggle("done");
    }
    )

    //removing the list item
    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove()
    })
    toDoBox.appendChild(listItem)
}
