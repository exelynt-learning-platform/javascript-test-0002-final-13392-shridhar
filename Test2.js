function invertedPascal(){
    const patternArr = [[1], [1,1]];
    let lastRow = patternArr[1];

    for(let i=1; i<4;i++){
        const rowArr = [1];

        for(let j=1;j<i+1;j++){
            rowArr.push(lastRow[j-1] + lastRow[j]);
        }

        rowArr.push(1);
        patternArr.push(rowArr);
        lastRow = rowArr;
    }

    for(let i = patternArr.length-1; i >= 0; i--){

        let spaces = " ".repeat(patternArr.length-1-i);
        let nums = patternArr[i].join(" ");

        console.log(spaces + nums);
    }
}

invertedPascal();