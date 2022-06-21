from flask import Flask, request
from pymongo import MongoClient
from flask_cors import CORS
import datetime
import requests
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

client = MongoClient('localhost', 27017)

db = client.test_database
cars = db.cars

def findPlateNumbers():
    from pprint import pprint
    regions = ['in']
    with open('latest.png', 'rb') as fp:
        response = requests.post(
            'https://api.platerecognizer.com/v1/plate-reader/',
            data=dict(regions=regions),
            files=dict(upload=fp),
            headers={'Authorization': 'Token ad63d5b9dfe9f48ff449c1f6fcf75e216c7ce8c4'}
        )
    results = response.json()['results']
    licensePlates = []
    for result in results:
        licensePlates.append(result['plate'])
    print(licensePlates)
    return licensePlates


@app.route('/api/cars', methods=['POST'])
def postCars():
    photograph = request.files['photograph']
    photograph.save(secure_filename('latest.png'))
    plateNumbers = findPlateNumbers()
    os.remove('latest.png')
    print(datetime.datetime.now())
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
    plate = []
    for car in data:
        plate.append((car['latitude'], car['longitude']))
    print(plate)
    return {
        'status': 'success',
        'data': plate
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