import * as Utils from "./scripts/utils.js";
import * as Algorithms from "./scripts/algorithms.js";

const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");
const canvas = document.getElementById("canvas");
const algorithm_select = document.getElementById("algorithem-select");
const context = canvas.getContext("2d");


//select要素にalgorithm内の名前を追加
window.onload = () =>{
    for(const name in Algorithms){
        
        const optiontag = document.createElement("option")
        optiontag.text = name;
        optiontag.id = name;
        //optiontag.value = name;
        //select要素にoption追加
        algorithm_select.appendChild(optiontag);
    }
}



startbtn.addEventListener("click", (e) => {
    //console.log("start button pressed");
    //console.log(algorithm_select.value);
    const sortArray = Utils.GenRandomIntNoConflict(0, 100);
    //console.log(sortArray);
    
    Algorithms.boublesort(context,sortArray,100)
})

stopbtn.addEventListener("click", (e) => {
    console.log("stop button pressed");

    context.clearRect(0, 0, canvas.width, canvas.height)
})