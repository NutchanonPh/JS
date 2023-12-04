const fb = {};
while (true) {
    let fruit = prompt('Enter fruit name');
    if (fruit.toLowerCase() == 'stop') {
        break;
    }
    let quantity = parseInt(prompt('Enter quantity: '));
    const key = quantity > 1 ? `${fruit}s` : fruit;
    fb[key] = quantity;
}
alert('Result Object: ' + JSON.stringify(fb));