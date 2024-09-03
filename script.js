const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//it is code by itself
inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && inputBox.value === '') {
        alert('You must write something!');
    }
    else if (event.key === 'Enter') {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // after than add span css style
        inputBox.value = '';
        saveData()
    }

})
function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add cross icon using sapn tag
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // after than add span css style
    }

    // Click on add button clear text on input box
    inputBox.value = '';
    saveData()
}

// click on the li it checked/unchecked & click on cross then delete

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)



// Save the data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()