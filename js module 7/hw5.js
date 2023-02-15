class Elect{
    constructor(){
        this.getJob = 'practical'
    }

    terN(){
        if (this.turnOn === true){
            console.log(this.name + " turn on!");
        } else {
            console.log(this.name + " turn off!");
    }
    }
    getUsed(){
        return this.turnOn ? this.power : 0;
    }
}

class KitchAppces extends Elect {
    constructor(name,power,turnOn){
        super(turnOn)
        this.name = name;
        this.power = power;
        this.turnOn = turnOn;
    }
    
}

const blender = new KitchAppces('blender', 2000, true);
const stove = new KitchAppces('stove', 3000, false);

console.log(blender.getUsed() + stove.getUsed());
stove.terN();
blender.terN();