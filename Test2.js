function invertedPascal() {

    const MAX = 4;

    for (let n = MAX; n >= 0; n--) {

        let line = " ".repeat(MAX - n);
        let val = 1;

        for (let k = 0; k <= n; k++) {
            line += val + " ";
            val = val * (n - k) / (k + 1);
        }

        console.log(line.trimEnd());
    }
}

invertedPascal();