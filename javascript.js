function getInputValueAsNumber(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        return Number(input.value)
    } else {
        console.log("Could not find: ", inputId);
        return 0;
    }
}

function createWithFlexbox(rows, cols, highlight) {
    let string = ''

    // first do-while loop to build the flex rows
    if (rows && cols) {
        string = "<div class='flex-table'>\n";

        for (let row = 1; row <= rows; row++) {
            if (highlight && highlight === row) {
                string += "<div class='row highlight'>\n";
            } else {
                string += "<div class='row'>\n";
            }

            for (let col = 1; col <= cols; col++) {
                if (highlight && highlight === col) {
                    string += "<div class='cell highlight'>";
                } else {
                    string += "<div class='cell'>";
                }
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
