const utils = {
    "GenRandomInt": (min, max) => {
        if (min < 0) {
            max += 1;
        }
        return Math.floor(Math.random() * (max - min) + min);
    },

    "GenRandomIntNoConflict": (min, max) => {
        const Array = [];
        for (let count = 0; count < max - min; count++) {
            const temp = utils.GenRandomInt(min, max);
    
    
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
    
                    const Regentemp = utils.GenRandomInt(min, max);
    
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
    },

    "DrawGraph": (Array) => {
        //console.log("drawing graph");
    
        //clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        const per_bar = context.canvas.width / Array.length
        for (const index in Array) {
            const value = Array[index];
    
            context.fillRect(
                index * per_bar,
                value * 10,
                per_bar,
                1000
            )
        }
    },
}