function createWithHtmlTable(rows, cols, highlight) {
    let string
    if (rows && cols) { // if rows/columns are provided
        string = "<table>\n" // build table

        for (let row = 1; row <= rows; row++) {
            if (highlight && highlight === row) {
                string += "<tr class='highlight'>\n"
            } else {
                string += "<tr>\n" // start row
            }
            for (let col = 1; col <= cols; col++) {
                if (highlight && highlight === col) {
                    string += "<td class='highlight'>\n"
                } else {
                    string += "<td>" // start cell
                }

                string += row * col // content
                string += "</td>\n" // end cell
            }
            string += "</tr>\n" // end row
        }
        string += "</table>\n" // end table
    } else {
        string = 'Provide some inputs'
    }

    document.getElementById('output').innerHTML = string;
}

// this method can be used to replace the 3 duplicates above = less code
function getInputValueAsNumber(inputId) {
    if (document.getElementById(inputId).value !== null) {
        return Number(document.getElementById(inputId).value)
    } else {
        console.log(`Sorry, value isn\'t present for this ID: `, inputId)
    }

    console.log(`Sorry, couldn\'t find this ID: `, inputId)
}

// getRowsDesired() is equivalent to getInputAsNumber("rows")
// getColsDesired() is equivalent to getInputAsNumber("cols")
// getHighlightDesired() is equivalent to getInputAsNumber("highlight")
//
console.log(`should get value of rows input: `, getInputValueAsNumber('rows'));
console.log(`should get value of cols input:`, getInputValueAsNumber('cols'));
console.log(`should get value of highlight input:`, getInputValueAsNumber('highlight'));
























