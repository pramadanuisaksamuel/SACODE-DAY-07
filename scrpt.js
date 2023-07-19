const inputBox = document.getElementById("input-Box")
const ListContainer = document.getElementById("list-Container")

function addTask(){
    if(input.value === ''){
        alert ("Ketik Sesuatu Sayang!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        ListContainer.appenChild(li)
    }
    inputBox.value = "";

}