Example of a filter -


const numbers = [1,2,3,4,5]
const newNumbers = numbers.filter((value) => {
    return value % 2 === 0 
})

console.log(numbers, newNumbers)