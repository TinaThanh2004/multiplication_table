function getRowsDesired() {
    return Number(document.getElementById('rows').value);
}

function getColumnsDesired() {
    return Number(document.getElementById('cols').value);
}

function getHighlightValue() {
    let highlightValue = document.getElementById('highlight').value;
    if (highlightValue !== '') {
        return Number(highlightValue);
    }
}

function createWithHtmlTable(rows, cols, highlight) {
    let string;
    if (rows && cols) {
        string = "<table>\n";

        for (let row = 1; row <= rows; row++) {
            if (highlight && highlight === row) {
                string += "<tr class='highlight'>\n";
            } else {
                string += "<tr>\n";
            }

            for (let col = 1; col <= cols; col++) {
                string += "<td>";
                string += row * col;
                string += "</td>\n";
            }
            string += "</tr>\n";
        }

        string += "</table>\n";
    } else {
        string = '⚠️ Please enter both rows and columns!';
    }

    document.getElementById('output').innerHTML = string;
}

function generateTable() {
    const rows = getRowsDesired();
    const cols = getColumnsDesired();
    const highlight = getHighlightValue();
    createWithHtmlTable(rows, cols, highlight);
}
























