// Guess Result 1
alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && alert(2));
alert(null || (2 && 3) || 4);
// ค่าที่ alert ออกมาจะเป็น 2 , 1 , 2 , null , 3

// Guess Result 2
if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || (-1 && 1)) alert('third');
// ค่าที่ alert ออกมาจะเป็น first , third