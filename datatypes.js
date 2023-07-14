var name = "Nikhil";
console.log(typeof name);

var obj = {
    name: "Verna",
    brand: "Hyundai", 
    obj2: {
        color: "black",
        year: 2020,
        insurances: ["physical", "engine", "body"]
    }
};

obj["model"] = 102;
console.log(obj);
console.log(typeof obj);

let keysArray = Object.keys(obj);
console.log(Object.values(obj));

console.log(obj.name);
console.log(obj.year);
console.log(obj.obj2.insurances);
console.log(obj["obj2"]["insurances"][3]);

let array = [1,2,3];

for(let index = 0; index<array.length; index++) {
    const element = array[index];
    console.log(element);
}
