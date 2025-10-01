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
    console.log(Number(document.getElementById('rows').value))
    return Number(document.getElementById('rows').value);
}

function getColumnsDesired() {
    console.log(Number(document.getElementById('cols').value))
    return Number(document.getElementById('cols').value)
}

function getHighlightValue() {
    let highlightValue = document.getElementById("highlight").value;

    if (highlightValue !== '') {
        return Number(highlightValue)
    }
}


function createWithHtmlTable(rows, cols, highlight) {
    let string //define a variable called string
    if (rows && cols) { //if rows nd columns were provided
        string = "<table>\n" //start building the HTML table

        for (let row = 1; row <= rows; row++) {

            if (highlight && highlight === row) {
                string += "<tr class='highlight'>\n"
            } else {
                string += `<tr>\n` //start building HTML row
            }


            for (let col = 1; col <= cols; col++) {
                string += "<td>" //start building a cell
                string += row * col //populate contents of cell
                string += "</td>\n" //complete cell
            }
            string += "</tr>\n" //complete HTML row
        }

        string += "</table>\n"
    } else { //either "rows" or "cols" wasn't provided
        string = 'Provide some inputs' //text "provide some inputs" will show
    }
    document.getElementById("output").innerHTML = string;
}
// createWithHtmlTable ()



























