let inputNum = prompt('Enter Your Number');
    //ตรวจสอบว่าผู้ใช้มีการป้อนข้อมูลหรือไม่
    if (inputNum !== null) {
        //แปลงข้อมูลที่รับมาเป็นตัวเลข
        let number = parseFloat(inputNum);
        //ตรวจสอบว่าข้อมูลเป็นตัวเลขหรือไม่
        if (!isNaN(number)) {
            //นับจำนวนหลักของเลขโดด
            let digitCount = 0;
            let absNum = Math.abs(number);
            //ลูปนับจำนวนหลัก
            while (absNum >= 1) {
                absNum /= 10;
                digitCount++;
                }
            //แสดงผลลัพธ์
                alert (`number: ${number} = ${digitCount}`);
            }
        }