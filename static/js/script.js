document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var inputText = document.getElementById('inputText').value;
    generateQR(inputText);
});

function generateQR(inputText) {
    fetch('/generate', {
        method: 'POST',
        body: new URLSearchParams({
            'input_text': inputText
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('qrCodeContainer').innerHTML = `<img src="data:image/png;base64,${data}" alt="QR Code">`;
    });
}
