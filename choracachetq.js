class Chorhetq extends Creature{
	constructor(x,y){
        super(x,y)
		this.energy = 10
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
    sev(){
    	// if(this.energy<=0){
    	// 	var newCell = chooseCell(3)
    	// 	var Cell = random(newCell)
    	// 	var newX = Cell[0]
    	// 	var newY = Cell[1]
    	// 	matrix[newY][newX] = 4

    	// }
    	// else{
        // 		this.energy--}
        
        if(this.energy<=0 && matrix[this.y][this.x]==3){
            matrix[this.y][this.x]=3
            let gr = new GrassEater(x,y)
            gras
            console.log(x,y)
        }
    }
}