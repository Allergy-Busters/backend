const mongoose = require('./connection')
const DailyLog = require('../models/dailyLogs')

DailyLog.deleteMany({})
.then(() => {
    return DailyLog.insertMany([
        {
            "date": '02/08/2022',
            "outdoorTemp": '62 ℉',
            "visitOutside": true,
            "diet": 'eggs, bread',
            "exercise": 'ran 3 miles',
            "potentialSymptoms": 'Feel bloated', 
            "img": 'picture of bloated stomach',
            "location": 'Bridgewater, NJ'

        },
        {
            "date": '02/09/2022',
            "outdoorTemp": '75 ℉',
            "visitOutside": true,
            "diet": 'eggs, chicken',
            "exercise": '50 squats',
            "potentialSymptoms": 'hives', 
            "img": 'picture of hives',
            "location": 'Miami, Florida'

        }

    ])
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => process.exit)

