// arguments[2].exports.c = { a: 1 }
// let b = [].slice.call(arguments)

function test2() {
    console.debug(this)
}

// test2.call({ name: '2' });
// test2.call(Object);
// test2.call(null);
// test2.call(undefined);

var d = 0;
for (var i = 0, j = 0; i < 10, j < 6; i++, j++) {
    // console.log(i);
    d = i + j;
}
// console.log(d);

// const { b: a } = { a: 123 } //b123




function Obj(obj) {
    for (const key in obj) {
        this[key] = typeof obj[key] == 'object' ? new Obj(obj[key]) : obj[key];
    }
}
let a = { name: 123, age: 999 };
let f = { t: 1, a: a };
// a.f = f;
f.d = new Date();
let c = new Obj(f);
console.log(f);
console.log(c)
f.t = 'test';
console.log(f);
console.log(c)
a.name = '张3';
console.log(f);
console.log(c);
// console.log(c.t);

console.log(1); //1
new Promise((resolve, reject) => {
    console.log(2); //2
    resolve();
}).then(() => {
    console.log(3) //4
});
setTimeout(() => {
    console.log(4) //6
});
setTimeout(() => {
    console.log(5) //7
});
new Promise((resolve, reject) => {
    console.log(6); //3
    resolve();
}).then(() => {
    console.log(7); //5
});
new Promise((resolve, reject) => {
    console.log(8);
    setTimeout(() => {
        console.log(9)
        resolve();
    });
}).then(() => {
    console.log(10);
});
// 1 2 6 8 3 7 4 5 9 10

function pr(s) {
    console.log(11);
    console.log(s);
}

function print2(s) {
    console.log(22);
    pr(s);
}

//11 1
//22 11 2
// 22 11 6
// 11 7
// 22 11 3
// 22 11 8
// 22 11 4
// 22 11 5

new Promise((resolve, reject) => {
    resolve.call(new Promise((r) => {
        r('hhh')
    }));
}).then((val) => {
    console.log(val);
})