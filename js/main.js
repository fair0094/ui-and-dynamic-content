//References to active elements 
const userInput= document.getElementById("user-input");
const btn = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const feed = document.querySelector(".feedback");

//Event Handler
function addItem() {
    //Default value of error paragraph
    feed.textContent = null;
    //Removing Whitespace
    userInput.value = userInput.value.trim();
    //If user input is not empty
    if (userInput.value !== ""){ 
        //Create a list item
        let listItem = document.createElement("li");
        //Assigning the value of text-field to the list item
        listItem.textContent = userInput.value;
        //Appending the new element to DOM
        displayData.appendChild(listItem);
    } else {
        feed.textContent = "nothing entered";
    }   
}

//Registering button for "click" event
btn.addEventListener("click", addItem);