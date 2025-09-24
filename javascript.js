/* alert('hello world!') */

/*loop examples*/
console.log('Here\'s a for loop showing 1...10:\n!')
for (let i = 0; i < 10; i++) {
    console.log(`${i}`)
}

console.log('Here\'s a do-while for loop showing 1...10:\n!')
let i = 0
do {
    console.log(i)
    i++
} while (i < 10)

console.log('Here\'s awhile for loop showing 1...10:\n!')
let j = 0
while (j < 10) {
    console.log(`${j}`)
    j++
}

console.log('Here\'s a foreach loop iterating over an array showing 1...10:\n!')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${num}`)
})




console.log('Here\'s a multiplication table method rendered in the console with a far loop:\n!')

let timesTable = (to) => {
    if (Number.isInteger(to)) {
        // rows iterator
        for (let i = 1; i <= to; i++) {
            let row = ""
            //columns iterator
            for (let j = 1; j <= to; j++) {
                row += `${ i * j }\t`
            }
            console.log(row)
        }
    } else {
        console.log(`Sorry, ${to} isn't a number!`)
    }
}

timesTable(4)