class Car{
    constructor(wheels,engine,color){
        this.carWheels=wheels
        this.carEngine=engine
        this.carColor=color
        Car.engineArray.push(this.carEngine)
        Car.engineArray.sort((a,b)=>b-a)
    }
    returnValues() {
    return `${this.carWheels} ${this.carEngine} ${this.carColor}`    
    }
    static engineArray=[]
    static returnEngineArr(){
        return Car.engineArray[0]
    }
}
class BigTruck extends Car{
    constructor(wheels,engine,color,thename){
        super(wheels,engine,color)
       this.TruckName=thename
    }
    returnValuesAndName() {
       return `BigTruck:${super.returnValues()} ${this.TruckName}`;
    }
    returnName(){
        return `${this.TruckName}`
    }
    get hideReturnName(){
        return `${this.returnName()[0].toUpperCase()}${this.returnName().substring(1,this.returnName().length-1)}${this.returnName()[this.returnName().length-1].toUpperCase()}`
    }
}
class Tesla extends Car{
    constructor(wheels,engine,color,thename){
        super(wheels,engine,color)
       this.teslaName=thename
    }
    returnValuesAndName() {
       return `tesla: ${super.returnValues()} ${this.teslaName}`;
    }
}
class Submarine extends Car{
    constructor(wheels,engine,color,thename){
        super(wheels,engine,color)
       this.submarineName=thename
    }
    returnValuesAndName() {
       return `Bigsubmarine: ${super.returnValues()} ${this.submarineName}`;
    }
}
    let test1= new Car(4,1000,"red")
    let test2= new BigTruck(8,100000,"red","truck")
    let test3= new Tesla(4,1000,"red")
    let test4= new Submarine(0,10000000,"red")
    console.log(test1.returnValues());
    console.log(test2.returnValuesAndName());
    console.log(test3.returnValuesAndName());
    console.log(test4.returnValuesAndName());
    console.log(test2.hideReturnName);
    console.log(Car.returnEngineArr());
    let test5;
    function formForCarInfo() {
        test5=new BigTruck(carInputWheels.value,carInputEngine.value,carInputColor.value,carInputName.value)
        table.innerHTML+=`<tr><td>${test5.carWheels}</td><td>${test5.carEngine}</td><td>${test5.carColor}</td><td>${test5.TruckName}</td></tr>`
    }