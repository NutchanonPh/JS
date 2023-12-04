//เขียนโค้ดในรูปแบบ if else
// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;
//     default:
//         alert('We hope that this page looks ok!');
// }
let browser = prompt('browser?');
if (browser === 'Edge') {
    alert("You'vs got the Edge");
}
if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}