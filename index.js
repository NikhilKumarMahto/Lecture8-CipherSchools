function square(num) {
    return num*num;
}

function square1(num=4) {
    return num*num;
}

let l = 1;

function area() {
    let l = 10;
    let b = 20;
    console.log(l);
    return l*b;
}

console.log(square(5));
console.log();

console.log("**********Tricky Example*************");

function a() {
    let b = 10;

    function c() {
        console.log(b);
    }
}

a();

{
    var s = 50;
}

function demo() {
    console.log(s);
    let z = 10;
    c();
    function c() {

    }
}

demo();

function print() {
    console.log("Printing some random text");
}

print();