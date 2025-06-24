const algorithms = {

    "boublesort": async(array, delay) => {
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
                    utils.DrawGraph(array);
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
    },

    "shakersort": async()=>{
        console.log("test");
    }
}