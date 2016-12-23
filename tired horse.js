function Horse(name) {
  this.name = name;
  this.mileage = 0;
  this.tiredness =0;
  this.rest = function() {
    this.tiredness=0;
    setTimeout(this.standing, 3000);
    console.log("RESTING HORSE");
  }
  this.finish = function () {
    console.log ("FINISH!!!");
  }
  this.standing = function () {
    console.log("Пожалейте меня, я устала!");
  }
  this.run = function(km) {
       while (this.mileage<=(km-1)){
      this.mileage += 1;
      this.tiredness += 1;
      console.log(this.mileage, this.tiredness);
      if (this.tiredness>=10) {console.log("Отдых");
    this.rest();}
    }
        this.finish;
  }
}
var h1 = new Horse('Лошаааадкаааа');
h1.run(31);
console.log("mileage "+h1.mileage);
console.log("tiredness "+h1.tiredness);

