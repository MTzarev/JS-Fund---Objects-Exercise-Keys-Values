function objectDemo(){
let adress={};
adress.town= `Plovdiv`
adress.street= `Tzar Simeon Veliki`
adress.streetNumber= 34
adress.floor= 2
adress.postCode= 4000

let keys = Object.keys(adress)
let values = Object.values(adress)
console.log(keys.join(` `));
console.log(values);


}
objectDemo();
