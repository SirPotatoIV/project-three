class Player {
    constructor(username) {
        // size will be a single integer, which will be the length and width of the map.
        this.username = username;
        this.health = 100;
        this.shield = 100;
        this.location = [1,1];
    }

    updateLocation(direction){
        // listing keys that I plan on using as the inputs for direction.
        // -- possibly makes it easier to change preferred controls later.
        const right = "d";
        const left = "a";
        const up = "w";
        const down = "s"
        
        switch(direction) {
            case right:
                const currentLocation = this.location[0]
                this.location[0] = currentLocation+1;             
        }
    }
}

module.exports = Player;

const jake = new Player("Jake");

jake.updateLocation("d")

console.log(jake)