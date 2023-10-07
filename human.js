class Human extends Creature{
    constructor(x, y) {
        super(x,y)
        this.energy = 8
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
    move() {
        this.energy--
        var getinCell1 = this.chooseCell(0)
        var getinCell2 = random(getinCell1)
        // setTimeout(()=>{
        //     this.fillColor()
        //     this.energy = 10
        // },10000)


        
            if (getinCell2 && this.energy > 0){
                var NewX = getinCell2[0]
                var NewY = getinCell2[1]
                matrix[NewY][NewX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = NewX
                this.y = NewY
                
            }
            
            
            

}
}