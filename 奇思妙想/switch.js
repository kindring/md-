let i = 9;
switch (true) {
    case (i < 7 && i > 2):
        console.log('a')
        break;
    case check(i):
        console.log('c')
        break;
    default:
        console.log('s')
        break;
}
let x = '123';
switch (x) {
    case (x < 7 && x > 2):
        console.log('aaaa')
        break;
    case check(x):
        console.log('ccc')
        break;
    default:
        console.log('ssss')
        break;
}

function check(i) {
    return '123';
}