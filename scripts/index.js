const genrandomBtn = document.getElementById("genrandom");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");
const canvas = document.getElementById("canvas");
const algorithm_select = document.getElementById("algorithm-select")
const context = canvas.getContext("2d");



window.onload = () =>{
    for(const name in algorithms){
        console.log("name: ", name);
        
        const optiontag = document.createElement("option")
        optiontag.text = name;
        optiontag.id = name;
        optiontag.value = name;
        //select要素にoption追加
        algorithm_select.appendChild(optiontag);
    }
}






genrandomBtn.onclick = () => {
    console.log(utils.GenRandomNoConflict(-10, 10));
    console.log(algorithms)
}

startbtn.onclick = async () => {
    console.log("start button pressed");

    const sortArray = utils.GenRandomIntNoConflict(0, 100);
    console.log(sortArray);
    
    algorithms.boublesort(sortArray,100)
}

stopbtn.onclick = () => {
    console.log("stop button pressed");

    context.clearRect(0, 0, canvas.width, canvas.height)
}