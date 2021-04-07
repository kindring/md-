let d = arguments[1]('./t.js');

console.log(d);

function abc() {
    let obj = {
        name: '15'
    }
    obj.__proto__ = {
        bb(str) {
            console.log(str);
        },
    };
    obj.__proto__.constructor = function() {

    }
    return obj
}

function fn(that, cb) {
    return function() {
        cb.call(that)
    }
}
abc.prototype.sayHello = function() {
    setTimeout(new fn(this, function() {
        console.log(`你好，我叫${this.name}`);
    }), 15);
}
let b = new abc();
console.log(b.name); //{ name: '15' }
console.log(typeof b); //obj
console.log(abc.sayHello);
b.bb('-------'); //-------
console.log(b.sayHello); //undefined


function abc3() {
    this.name = 'n'
}

abc3.prototype.sayHello = function() {
    console.log(`你好，我叫${this.name}`);
}

// abc3.sayHello();


//error
// let c = new(() => {
//     let obj = {
//         name: '15'
//     }
//     obj.__proto__ = this;
//     return obj
// })();
// console.log(c);

//ok

let a = () => {
    console.log(arguments);
};
// console.log(arguments);
arguments[2]