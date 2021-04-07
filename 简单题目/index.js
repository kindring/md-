// 
function exit(maxLen, baseArr, newNumber) {
    // 创建一开始的随机数
    newNumber = newNumber === 0 ? newNumber : newNumber || Math.floor(Math.random() * 31 + 2);
    //创建一开始的数组
    baseArr = baseArr || [];
    let isExit = false;
    for (var i in baseArr) {
        if (baseArr[i] === newNumber) {
            isExit = true;
            break;
        }
    }
    //存在的话则递归获取不存在的数;
    if (isExit) {
        //创建新的数据
        newNumber = exit(maxLen, baseArr);
    } else {
        //不存在于数组中,添加到数组内
        baseArr.push(newNumber);
        if (baseArr.length === maxLen) {
            return baseArr;
        } else {
            baseArr = exit(maxLen, baseArr)
        }
    }
    return baseArr;
}
console.log(exit(5));
console.log(exit(5));