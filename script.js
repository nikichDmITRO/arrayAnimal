const animals = ["beard", "dog", "mouse"];

function showArr(arr, elem) {
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += `<div><img src="img\\${arr[i]}.png"/><span>${i}</span></div>`;
  }

  document.querySelector(elem).innerHTML = out;
  document.querySelector(".out-source-length").innerHTML =
  "Длинна массива : " + animals.length;
document.querySelector(".out-1-source").innerHTML =
  "const animals=[" + animals + "]";

}

showArr(animals, ".out-source-image");

function addToArray(){
    let index=document.querySelector(".arr-index").value
    if(index>50){
        alert("Зачем такое большое")
        return false
    }
    else if(index<0){
        alert("Индекс должен быть больше 0")
        return false
    }
    animals[index]=document.querySelector(".array-element").value
    showArr(animals, ".out-source-image")
}


  document.querySelector(".clickBut").onclick=addToArray

