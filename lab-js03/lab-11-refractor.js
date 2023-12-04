//เปลี่ยน if-else ให้อยู่ในรูปของ Ternary Operators
let login = prompt('Enter username');
// let message;
// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }
login == 'Employee' ? alert('Hello') :
login == 'Director' ? alert('Greetings') :
login == '' ? 'No login' : '';