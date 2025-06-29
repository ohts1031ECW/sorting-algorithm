import { DrawGraph, heighlightSelection } from "./utils.js";

async function boublesort(context,array, delay) {
    let temp;
    let finishAdj = 1;
    let complete = false;
    
    const Interval = setInterval(() => {
        let loopswap = false;
        for (let i = 0; i < array.length - finishAdj; i++) {
            if (array[i] < array[i + 1]) {
                temp = array[i];

                //順番入れ替え
                array[i] = array[i + 1];
                array[i + 1] = temp;
                loopswap = true;

                //描画更新
                DrawGraph(context,array);
                heighlightSelection(context, array, i);
            }
        }

        if (!loopswap) {
            complete = true;
        }
        finishAdj++;

        //ループ停止
        if (complete) {
            console.log("sort completed")
            clearInterval(Interval);
            DrawGraph(context, array);
        }
    }, delay);


    return array;
};

async function shakersort() {
    console.log("test");
}


export {
    boublesort,
    shakersort
}