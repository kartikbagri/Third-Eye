from flask import Flask, request
from pymongo import MongoClient
from flask_cors import CORS
import datetime
import requests
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

client = MongoClient(os.environ['MONGODB_URI'])

db = client.test_database
cars = db.cars

def findPlateNumbers():
    regions = ['in']
    with open('latest.png', 'rb') as fp:
        response = requests.post(
            'https://api.platerecognizer.com/v1/plate-reader/',
            data=dict(regions=regions),
            files=dict(upload=fp),
            headers={'Authorization': 'Token ad63d5b9dfe9f48ff449c1f6fcf75e216c7ce8c4'}
        )
    try:
        results = response.json()['results']
        licensePlates = []
        for result in results:
            licensePlates.append(result['plate'])
        print(licensePlates)
        return licensePlates
    except:
        return []


@app.route('/api/cars', methods=['POST'])
def postCars():
    photograph = request.files['photograph']
    photograph.save(secure_filename('latest.png'))
    plateNumbers = findPlateNumbers()
    os.remove('latest.png')
    for plateNumber in plateNumbers:
        carData = {
            'licensePlateNumber': plateNumber,
            'timestamp': datetime.datetime.now(),
            'latitude': request.form['latitude'],
            'longitude': request.form['longitude'],
        }
        cars.insert_one(carData)
    return {
        'licensePlateNumber': plateNumbers,
        'status': 'success',
        'message': 'Car added successfully'
    }


@app.route('/api/cars/find', methods=['POST'])
def getCars():
    data = cars.find({
        'licensePlateNumber': request.form['licensePlate']
    })
    results = []
    for car in data:
        results.append({
            'licensePlateNumber': car['licensePlateNumber'],
            'latitude': car['latitude'], 
            'longitude': car['longitude'],
            'timestamp': car['timestamp']
        })
    return {
        'status': 'success',
        'data': results
    }

@app.route('/api/data', methods=['POST'])
def postData():
    carData = {
            'licensePlateNumber': request.form['plate'],
            'timestamp': datetime.datetime.now(),
            'latitude': request.form['latitude'],
            'longitude': request.form['longitude'],
        }
    cars.insert_one(carData)
    return {
        'status': 'success',
        'message': 'Car added successfully'
    }

@app.route('/')
def hello_world():
    return 'Hello, World! welcome to Third Eye!'