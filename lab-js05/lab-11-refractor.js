function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
// เขียนแบบใช้ if แต่ห้ามใช้ else
function checkAge1(age1) {
    if (age1 > 18) {
        return true;
    }
    return confirm('Did parents allow you?');
}
// เขียนแบบใช้ ? แทน if
function checkAge2(age2) {
    return (age2 > 18) ? true : confirm('Did parents allow you?');
}
// เขียนแบบใช้ || แทน if
function checkAge3(age3) {
    return (age3 > 18) || confirm('Did parents allow you?');
}