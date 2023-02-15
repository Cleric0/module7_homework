function Elect() {
    this.getJob = 'practical'
}

Elect.prototype.turN = function(){
    if (this.turnOn === true){
        console.log(this.name + " turn on!");
    } else {
        console.log(this.name + " turn off!");
}}

Elect.prototype.getUsed = function(){
    return this.turnOn ? this.power : 0;
}

function KitchAppces(name,power,turnOn){
    this.name = name;
    this.power = power;
    this.turnOn = turnOn;
}

KitchAppces.prototype = new Elect()

const blender = new KitchAppces('blender', 2000, true);
const stove = new KitchAppces('stove', 3000, false);

blender.turN();
stove.turN();
console.log(blender.getUsed() + stove.getUsed());










































// ElectricalAppliances.prototype.getModel = function(fit){
//     console.log(`Model ${fit} in the work`)
// }

// function KitchenAppliances(name){
//     this.name = name,
//     this.difficulty = 'medium'
// }

// KitchenAppliances.prototype.getWarranty = function(warranty){
//     console.log(`Is warranty period of ${warranty} year`)
// }

// KitchenAppliances.prototype = new ElectricalAppliances()

// const stove = new KitchenAppliances('stove');
// const blender = new KitchenAppliances('blender');

// const news = new ElectricalAppliances('news');
// const early = new ElectricalAppliances('early');

// news.getModel('great')
// early.getModel('unfit')


// stove.getWarranty(5)
// blender.getWarranty(1)


// // ElectricalAppliances.prototype.mode = function(on){
// //     console.log(`Appliance tern $(onn)`)}
// // KitchenAppliances.prototype.mode = function(off){
// //     console.log(`Appliance tern $(off)`)
// // }