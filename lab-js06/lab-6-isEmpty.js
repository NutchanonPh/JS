function isEmptyObject(obj) {
    const entries = Object.entries(obj);
    return entries.length == 0;
}
const emptyObject = {};
const nonEmptyObject = {
    key: 'value'
}
console.log(isEmptyObject(emptyObject));
console.log(isEmptyObject(nonEmptyObject));