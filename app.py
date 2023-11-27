from flask import Flask, render_template, Response, jsonify, request, session
import os
from model import process_image
import json 

app = Flask(__name__)   
app.config['SECRET_KEY'] = os.urandom(24)
app.config['UPLOAD_FOLDER'] = 'static/files'

@app.route("/")
@app.route("/home")
def index():
    return render_template('index.jinja');

#api endpoint
@app.route("/upload", methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # gets augmentation status from the form
        augmented = request.form.get('data-augmentation')

        # check if the post request has the file part
        if 'image' not in request.files:
            return {'message': 'No file uploaded.', 'success': False}

        file = request.files['image']

        # if user does not select file
        if file.filename == '':
            return {'message': 'No file selected.', 'success': False}

        # if file exists
        if file:
            #set mode for model
            if augmented:
                mode = 'medetect_withaugment.pt'
            else:
                mode = 'medetect_withoutaugment.pt'

            result = process_image(mode, file, app.config['UPLOAD_FOLDER'])

            return jsonify({'message': 'success', 'success': True, 'file_path': result})
