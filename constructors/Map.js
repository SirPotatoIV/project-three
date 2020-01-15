const Tile = require("./Tile")

class Map {
    constructor(size) {
        // size will be a single integer, which will be the length and width of the map.
        this.size = size;
        this.tiles = {};
    }

    createTiles(){
        // write loop to create 50 * 50 objects that will represent tiles
        for(let i=0; i <= this.size; i++){
            for(let j=0; j <= this.size; j++){
                const tileName = `x${i}y${j}`
                const tileLocation = [i,j];
                const newTile = new Tile(tileLocation)
                this.tiles[tileName] = newTile;
            }
        }
    }

    // used to help create obstructions in the map. It's going to have to get more complex in the future.
    // -- start is a string that represents the starting location of the obstruction ie "x1y1"
    // -- direction should be "vertical" or "horizontal". The obstcution will either go from left to right or down to up.
    // -- length is the number of tiles you want to make obscructions starting from the start tile
    createObscruction(start, direction, length){
        // get start location, direction, length
        // turn start into an array so that it can be incremented and updated in each loop
        let currentTile = start;
        // creates an array from the start tile string so that it can be incremented to keep looping
        let currentTileArray = currentTile.split("");

        for(let i=0; i <= length; i++){
          
            if(direction === "vertical"){
                // sets is obscrution to true for the current tile in the loop
                this.tiles[currentTile].isObstruction = true;
                // updates the name of the tile so that the next tile is updated is the tile above the current tile
                currentTileArray[3] = parseInt(currentTileArray[3]) + 1;
                currentTileArray[3] = currentTileArray[3].toString()
                // turns array back into string to use to call the next tile
                currentTile = currentTileArray.join("");
            } 
            // this would be the case for a horizontal obstruction
            else{
                this.tiles[currentTile].isObstruction = true;
                // updates the name of the tile so that the next tile is updated is the tile to the right of the current tile
                currentTileArray[1] = parseInt(currentTileArray[1]) + 1;
                currentTileArray[1] = currentTileArray[1].toString()
                // turns array back into string to use to call the next tile
                currentTile = currentTileArray.join("");
            }
        }
    }
}

const map = new Map(10);
map.createTiles();
map.createObscruction("x3y3", "horizontal", 3)
