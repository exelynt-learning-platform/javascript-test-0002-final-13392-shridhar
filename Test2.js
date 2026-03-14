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

        let line = "";

        // indentation
        for(let s = 0; s < patternArr.length-1-i; s++){
            line += " ";
        }

        for(let num of patternArr[i]){
            line += num + " ";
        }

        console.log(line);
    }
}

invertedPascal();