
const MAX_ALLOWED_VALUE = 50;

function generateTable() {
    clearErrorMessages();

    try {
        // Get user inputs
        var minRows = parseInt(document.getElementById('minRows').value);
        var minCols = parseInt(document.getElementById('minCols').value);
        var maxRows = parseInt(document.getElementById('maxRows').value);
        var maxCols = parseInt(document.getElementById('maxCols').value);

        // Validate inputs
        validateInputRange(minRows, 'minRows');
        validateInputRange(minCols, 'minCols');
        validateInputRange(maxRows, 'maxRows');
        validateInputRange(maxCols, 'maxCols');

        // Generate the multiplication table
        var tableContent = '<table>';
        for (var i = minRows - 1; i <= maxRows; i++) {
            tableContent += '<tr>';
            for (var j = minCols - 1; j <= maxCols; j++) {
                if (i === minRows - 1 && j === minCols - 1) {
                    tableContent += '<th></th>';
                } else if (i === minRows - 1) {
                    tableContent += '<th>' + j + '</th>';
                } else if (j === minCols - 1) {
                    tableContent += '<th>' + i + '</th>';
                } else {
                    tableContent += '<td>' + (i * j) + '</td>';
                }
            }
            tableContent += '</tr>';
        }
        tableContent += '</table>';

        // Display the table
        document.getElementById('tableContainer').innerHTML = tableContent;
    } catch (error) {
        // Display error message
        displayErrorMessage(error.message);
    }
}

function validateInputRange(value, inputName) {
    if (isNaN(value) || value < -MAX_ALLOWED_VALUE || value > MAX_ALLOWED_VALUE) {
        throw new Error('Please enter a valid number between -50 and ' + MAX_ALLOWED_VALUE + ' for ' + inputName + '.');
    }
}
function displayErrorMessage(message) {
    var errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
    errorMessageElement.style.color = 'red';
}

function clearErrorMessages() {
    document.getElementById('errorMessage').textContent = '';
}