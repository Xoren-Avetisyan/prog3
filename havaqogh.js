class Havaqogh extends Creature{
    constructor(x, y) {
        super(x,y,)
        this.energy = 22
    }
    
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }
    haytnvel() {
        // if(this.energy<=0 && matrix[this.y][this.x] == 1){
        // 	matriix[this.y][this.x] = 5
        // 	var getinCell = chooseCell(0)
        // 	var rgCell = random(getinCell)
        // 	var moxirCell = chooseCell(4)
        // 	var rmCell = random (moxirCell)
        // 	if(rmCell){
        // 		var newX = rmCell[0]
        // 		var newY = rmCell[1]
        // 		matrix[newY][newX] = matrix[this.y][this.x]
        // 		matrix[this.y][this.x]=0
        // 	} 
        // 	else{
        // 		var newX = rgCell[0]
        // 		var newY = rgCell[1]
        // 		matrix[newY][newX]= matrix[this.y][this.x]
        // 		matrix[this.y][this.x] = 0
        // 	}
        // }else{
        // 	this.energy--
        // }
        if (this.energy <= 0 && matrix[this.y][this.x] == 1) {
            matrix[this.y][this.x] = 5
        }
        else {
            this.energy--
        }
    }
    move() {
        if (this.energy <= 0 && matrix[this.y][this.x] == 5) {
            var getinCell = this.chooseCell(0)
            var rgCell = random(getinCell)
            var moxirCell = this.chooseCell(4)
            var rmCell = random(moxirCell)
            if (rmCell) {
                var newX = rmCell[0]
                var newY = rmCell[1]
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
            }
            else {
                var newX = rgCell[0]
                var newY = rgCell[1]
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
            }
        }
    }
}