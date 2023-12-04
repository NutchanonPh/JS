const user = {
    email: 'cc@gmail.com',
    isActive: true
};

user.isActive = false;
console.log(user); // แสดงผล email: "cc@gmail.com"
user = {};
console.log(user); // แสดงผล isActive: false