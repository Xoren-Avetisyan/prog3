class Hetq extends Creature{
	constructor(x,y){
        super(x,y)
		this.energy = 8
        
    }
    
    chooseCell(character) {
        // this.getNewCoordinates()
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
    hetq() {
        if (this.energy <= 0) {
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);
            var emptyCells1 = this.chooseCell(1);
            var newCell1 = random(emptyCells1);

            if (newCell1) {
                let NewX = newCell1[0];
                let NewY = newCell1[1];
                matrix[NewY][NewX] = 3;
            }
            else if (newCell) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 3;
            }
        } else {
            this.energy--
        }
    }
}