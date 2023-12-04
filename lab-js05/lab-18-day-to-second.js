const daysToSeconds = (days) => {
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay =24;
    const seconds = days * hoursInDay * minutesInHour * secondsInMinute;
    return seconds;
}
let days = prompt('ใส่จำนวนวัน')
const result = daysToSeconds(days);
alert(`${days} วัน = ${result} วินาที`);