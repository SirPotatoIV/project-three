class Tile {
    constructor(location) {
        // size will be a single integer, which will be the length and width of the map.
        this.location = location;
        this.isObscruction = false;
    }

    updateObscrution(){
        // write loop to create 50 * 50 objects that will represent tiles
        if(this.isObscruction){
            this.isObscruction = false;
        }else{
            this.isObscruction = true;
        }
    }
}

module.exports = Tile;