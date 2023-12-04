const myObject = {};
while (true) {
    let key = prompt("key: ");
    if (key == "stop")
    break;
let value = prompt('value: ')
myObject[key] = value;
}
alert(JSON.stringify(myObject))