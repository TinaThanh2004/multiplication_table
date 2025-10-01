// /* alert('hello world!') */
//
// /*loop examples*/
// console.log('Here\'s a for loop showing 1...10:\n!')
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`)
// }
//
// console.log('Here\'s a do-while for loop showing 1...10:\n!')
// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 10)
//
// console.log('Here\'s awhile for loop showing 1...10:\n!')
// let j = 0
// while (j < 10) {
//     console.log(`${j}`)
//     j++
// }
//
// console.log('Here\'s a foreach loop iterating over an array showing 1...10:\n!')
// let nums = [...Array(10).keys()]
// nums.forEach(num => {
//     console.log(`${num}`)
// })
//
//
//
//
// console.log('Here\'s a multiplication table method rendered in the console with a far loop:\n!')
//
// let timesTable = (to) => {
//     if (Number.isInteger(to)) {
//         // rows iterator
//         for (let i = 1; i <= to; i++) {
//             let row = ""
//             //columns iterator
//             for (let j = 1; j <= to; j++) {
//                 row += `${ i * j }\t`
//             }
//             console.log(row)
//         }
//     } else {
//         console.log(`Sorry, ${to} isn't a number!`)
//     }
// }
//
// timesTable(12)
//
// timesTable(20)
//
// timesTable('x')
//
//
//
//
//




//
function getRowsDesired() {
    // console.log(Number(document.querySelector('.rows input#rows').value))
    // console.log(Number(document.querySelectorAll('.rows input')[0].value))
    // console.log(Number(document.getElementById('rows').value))
    return Number(document.getElementById('rows').value);
}

function getColumnsDesired() {
    // console.log(Number(document.getElementById('cols').value))
    return Number(document.getElementById('cols').value)
}


function createWithHtmlTable(rows, cols) {
    let string
    if (rows && cols) {
        string = "<table>\n"

        for (let row = 1; row <= rows; row++) {
            string += `<tr>\n`

            for (let col = 1; col <= cols; col++) {
                string += "<td>"
                string += row * col
                string += "<td>\n"
            }
            string += "</tr>\n"
        }

        string += "</table>\n"
    } else {
        string = 'Provide some inputs'
    }
    document.querySelector("section.container > section#output").innerHTML = string
    // document.getElementById("output").innerHTML = string;
}
// createWithHtmlTable ()



























