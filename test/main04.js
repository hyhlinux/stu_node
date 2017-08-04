var arr = [11, 2, 3, 5, 4, 9];


function compareAB(a, b) {
    // if (a > b) {
    //     return 1;
    // } else if (a === b) {
    //     return 0;
    // } else {
    //     return -1;
    // }
    return a > b;
}

arr.sort(compareAB);

console.log('after sort:', arr);
