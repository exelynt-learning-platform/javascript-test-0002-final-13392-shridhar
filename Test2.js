function invertedPascal(){

    const MAX = 4;

    for(let n = MAX; n >= 0; n--){

        let line = " ".repeat(MAX - n);

        let val = 1;

        for(let k = 0; k <= n; k++){

            if(k > 0){
                val = val * (n - k + 1) / k;
            }

            line += val;

            if(k < n) line += " ";
        }

        console.log(line);
    }
}

invertedPascal();