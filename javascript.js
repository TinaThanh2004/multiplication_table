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
