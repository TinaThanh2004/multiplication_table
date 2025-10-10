function createWithFlexbox(rows, cols, highlight) {
    let string; // same variable name as before

    if (rows && cols) {
        string = "<div class='flex-table'>\n"; // main container

        for (let row = 1; row <= rows; row++) {
            if (highlight && highlight === row) {
                string += "<div class='row highlight'>\n";
            } else {
                string += "<div class='row'>\n";
            }

            for (let col = 1; col <= cols; col++) {
                if (highlight && highlight === col) {
                    string += "<div class='cell highlight'>\n";
                } else {
                    string += "<div class='cell'>\n";
                }

                string += row * col; // same logic as before
                string += "</div>\n"; // close .cell
            }

            string += "</div>\n"; // close .row
        }

        string += "</div>\n"; // close .flex-table
    } else {
        string = "Provide some inputs";
    }

    document.getElementById("output").innerHTML = string;
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

