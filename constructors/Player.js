class Player {
    constructor(username) {
        // size will be a single integer, which will be the length and width of the map.
        this.username = username;
        this.health = 100;
        this.shield = 100;
        this.location = [1,1];
    }
    
    // update the players health
    updateHealth(change){
        this.health = this.health + change;
    }

    // update the players shield
    updateShield(change){
        this.shield = this.shield + change;
    }

    // allows the player to move around the map
    updateLocation(direction){
        // listing keys that I plan on using as the inputs for direction.
        // -- possibly makes it easier to change preferred controls later.
        const right = "d";
        const left = "a";
        const up = "w";
        const down = "s"
        
        switch(direction) {
            case right: 
                this.location[0] = this.location[0] + 1
                break;
            case left:
                this.location[0] = this.location[0] - 1
                break;
            case up:
                this.location[1] = this.location[1] + 1
                break;            
            case down:
                this.location[1] = this.location[1] - 1
                break;            
        }
    }

    // see if tile is an obstruction or will damage the player
    checkTile(){
        // get tile location from updateLocation

        // check tile in map
    }

    // take in keyboard event and decide which function to call
    routeKeyboardEvent(key){
        // based on key, other function is called. Probably use a switch statement
    }


    // give player feedback on interaction with an object
    interact(){

    }
}

module.exports = Player;

const jake = new Player("Jake");

jake.updateLocation("d")
console.log(`${jake.username} moved right! ${jake.location}`)
jake.updateLocation("a")
console.log(`${jake.username} moved left! ${jake.location}`)
jake.updateLocation("w")
console.log(`${jake.username} moved up! ${jake.location}`)
jake.updateLocation("s")
console.log(`${jake.username} moved down! ${jake.location}`)