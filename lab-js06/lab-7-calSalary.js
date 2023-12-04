let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
function calculate(salaries) {
    const values = Object.values(salaries);
    const filteredValues = values.filter(value => typeof value == 'number' && !isNaN(value));
    const totalSalary = filteredValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return totalSalary;
}
const totalSalary = calculate(salaries);
console.log(`Total salaries is: ${totalSalary}`);