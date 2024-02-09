from flask import Flask, render_template, request, send_from_directory
import pyqrcode
from io import BytesIO

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    input_text = request.form['input_text']
    qr = pyqrcode.create(input_text)
    qr_img = qr.png_as_base64_str(scale=5)
    return qr_img

if __name__ == '__main__':
    app.run(debug=True)
