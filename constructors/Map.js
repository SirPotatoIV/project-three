const Tile = require("./Tile")

class Map {
    constructor(size) {
        // size will be a single integer, which will be the length and width of the map.
        this.size = size;
        this.tiles = {};
    }

    createTiles(){
        console.log("createTiles has been started")
        // write loop to create 50 * 50 objects that will represent tiles
        for(let i=0; i <= this.size; i++){
            console.log(i)
            for(let j=0; j <= this.size; j++){
                const tileName = `x${i}y${j}`
                const tileLocation = [i,j];
                const newTile = new Tile(tileLocation)
                this.tiles[tileName] = newTile;
                console.log(this.tiles)
            }
        }
    }
}

const map = new Map(5);
map.createTiles();

console.log(map)