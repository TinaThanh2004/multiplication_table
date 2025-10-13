function createWithFlexbox(rows, cols, highlight) {
    let string;
    if (rows && cols) {
        string = "<div class='flex-table'>\n";

        for (let row = 1; row <= rows; row++) {
            string += highlight && highlight === row
                ? "<div class='row highlight'>\n"
                : "<div class='row'>\n";

            for (let col = 1; col <= cols; col++) {
                string += highlight && highlight === col
                    ? "<div class='cell highlight'>"
                    : "<div class='cell'>";

                string += row * col;
                string += "</div>\n";
            }

            string += "</div>\n"; // end row
        }

        string += "</div>\n"; // end flex-table
    } else {
        string = 'Please enter both row and column numbers.';
    }

    document.getElementById('output').innerHTML = string;
}

function getInputValueAsNumber(inputId) {
    const element = document.getElementById(inputId);
    if (element) {
        const value = Number(element.value);
        return value;
    } else {
        console.log(`Sorry, couldn’t find this ID:`, inputId);
        return 0;
    }
}


// function createWithHtmlTable(rows, cols, highlight) {
//     let string
//     if (rows && cols) {
//         string = "<table>\n"
//
//         for (let row = 1; row <= rows; row++) {
//             if (highlight && highlight === row) {
//                 string += "<tr class='highlight'>\n"
//             } else {
//                 string += "<tr>\n"
//             }
//             for (let col = 1; col <= cols; col++) {
//                 if (highlight && highlight === col) {
//                     string += "<td class='highlight'>\n"
//                 } else {
//                     string += "<td>"
//                 }
//
//                 string += row * col
//                 string += "</td>\n"
//             }
//             string += "</tr>\n"
//         }
//         string += "</table>\n"
//     } else {
//         string = 'Provide some inputs'
//     }
//
//     document.getElementById('output').innerHTML = string;
// }
//
// function getInputValueAsNumber(inputId) {
//     if (document.getElementById(inputId).value !== null) {
//         return Number(document.getElementById(inputId).value)
//     } else {
//         console.log(`Sorry, value isn\'t present for this ID: `, inputId)
//     }
//
//     console.log(`Sorry, couldn\'t find this ID: `, inputId)
// }
//
// console.log(`should get value of rows input: `, getInputValueAsNumber('rows'));
// console.log(`should get value of cols input:`, getInputValueAsNumber('cols'));
// console.log(`should get value of highlight input:`, getInputValueAsNumber('highlight'));
//

