const addButton = document.getElementById("addBtn");
const inputNumber = document.getElementById("inputNumber");
const numberList = document.getElementsByClassName("numberList");
addButton.addEventListener("click", function () {
    const text=parseInt(inputNumber.value)
    if(!text){

        const li=document.createElement('li');
        console.log(numberList)
    }

});
