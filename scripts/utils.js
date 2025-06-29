function GenRandomInt(min, max) {
    if (min < 0) {
        max += 1;
    }
    return Math.floor(Math.random() * (max - min) + min);
};

function GenRandomIntNoConflict(min, max) {
    const Array = [];
    for (let count = 0; count < max - min; count++) {
        const temp = GenRandomInt(min, max);


        //かぶったやつを検出
        let IsConflict = false;
        Array.forEach((value, index) => {
            if (value === temp) {
                IsConflict = true;
            }
        })


        if (IsConflict) {

            let Regen;
            do {

                const Regentemp = GenRandomInt(min, max);

                //被り検出初期化
                IsConflict = false;
                Array.forEach((value, index) => {
                    if (value === Regentemp) {
                        IsConflict = true;
                    }
                })

                Regen = Regentemp;

                //被っていたら繰り返す
            } while (IsConflict);

            //被らなかった値を配列に追加
            Array.push(Regen)
        } else {
            Array.push(temp);
        }

    }
    return Array;
};

//グラフ描画関数
function DrawGraph(context, Array) {
    //console.log("drawing graph");

    //clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    const per_bar = context.canvas.width / Array.length
    for (const index in Array) {
        const value = Array[index];

        context.save();
        context.fillRect(
            index * per_bar,
            canvas.height - value * 10,
            per_bar,
            1000
        )
    }
}

async function heighlightSelection(context, Array, selection) {

    const per_bar = context.canvas.width / Array.length
    context.save();
    //選択中のバーを赤くする
    context.fillStyle = "rgba(255, 0, 0, 0.5)";
    context.fillRect(
        selection* per_bar,
        0,
        per_bar,
        1000
    )

    context.restore();

}
export {
    GenRandomInt,
    GenRandomIntNoConflict,
    DrawGraph,
    heighlightSelection,
}