function generate(matLen, hm, bb) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < hm; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < bb; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        // console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    return matrix
}


let matrix = generate(15, 8, 9)


var side = 40;
let humanArr = []
let bombArr = []
let havaqoghArr = []
let hetqArr = []
let choracachetqArr = []


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let hm = new Human(x, y)
                let hv = new Havaqogh(x,y)
                let ch = new Chorhetq(x, y)
                humanArr.push(hm)
                havaqoghArr.push(hv)
                choracachetqArr.push(ch)
            } else if (matrix[y][x] == 2) {
                let bb = new Bomb(x, y)
                let hq = new Hetq(x, y)
                let ch = new Chorhetq(x, y)
                let hv = new Havaqogh(x,y)
                havaqoghArr.push(hv)
                bombArr.push(bb)
                hetqArr.push(hq)
                choracachetqArr.push(ch)

            }
            else if (matrix[y][x] == 0){
                let hv = new Havaqogh(x,y)
                havaqoghArr.push(hv)
                let ch = new Chorhetq(x, y)
                choracachetqArr.push(ch)
            }

        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }


            rect(x * side, y * side, side, side);


        }
    }


    for (let i in humanArr) {
        humanArr[i].move()
    }

    // for (let i in bombArr) {
    //     bombArr[i].boom()
    // }
    for (let i in hetqArr) {
        hetqArr[i].hetq()
    }
    for (let i in choracachetqArr) {
        choracachetqArr[i].sev()
    }
    for (let i in havaqoghArr) {
        havaqoghArr[i].haytnvel()
        havaqoghArr[i].move()
    }
}
    