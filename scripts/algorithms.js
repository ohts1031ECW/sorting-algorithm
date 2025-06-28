import { DrawGraph } from "./utils.js";

async function boublesort(context,array, delay) {
    let temp;
    let finishAdj = 1;
    let complete = false;
    let loopswap = false;

    const Interval = setInterval(() => {
        for (let i = 0; i < array.length - finishAdj; i++) {
            if (array[i] < array[i + 1]) {
                temp = array[i];

                //順番入れ替え
                array[i] = array[i + 1];
                array[i + 1] = temp;
                loopswap = true;

                //描画更新
                DrawGraph(context,array);
            }
        }
        if (!loopswap) {
            complete = true;
        }
        finishAdj++;
    }, delay);

    //ループ停止
    if (complete) {
        console.log("sort completed")
        clearInterval(Interval);
    }
    return array;
};

function shakersort() {
    console.log("test");
}


export {
    boublesort,
    shakersort
}