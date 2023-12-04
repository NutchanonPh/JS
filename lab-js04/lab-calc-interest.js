let money = 100000;
let interest = 2.5;
for (let i = 1; i <= 10; i++) {
    money = money + (money * interest / 100);
    console.log("End of the year " + i + "Your money is " + money);
}