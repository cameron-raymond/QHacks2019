const price_per_km = 0.05;

var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyDHaDZN8cLM49JxSAc0mg0kMrHrddMlbJQ",
    authDomain: "distributeddelivery.firebaseapp.com",
    databaseURL: "https://distributeddelivery.firebaseio.com",
    projectId: "distributeddelivery",
    storageBucket: "distributeddelivery.appspot.com",
    messagingSenderId: "463943185639"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

/**
 * 
 * @param {*} aJson 
 * JSON parameters
 * {
 *      sendingOrDriving: "sending" or "driving",
 *      locations: [{longitude and latitude}],
 *      space: "small" or "medium" or "large",
 *      time: [begin date, end date] or date
 * }
 */
export function handleForm(aJson) {
    console.log(aJson)
    var sizeNum = convertSize(aJson.size);
    if (aJson.sendOrDrive === "sending") {
        var driverData = [];
        driverData = getDriver(aJson.locations, sizeNum, aJson.timeFrame);
        //get amount
        var demand = demand_identifier(driverData[0]);
        var distance = distance_estimator(aJson.locations[0].lat, aJson.locations[0].lng, aJson.locations[1].lat, aJson.locations[1].lng);
        var cost = calculator(demand, distance, sizeNum);
        driverData.push(cost);
        console.log(driverData);
        return driverData;
    }

    if (aJson.sendOrDrive === "driving") {
        db.collection('drivers').add({
            name: aJson.name,
            travelLocation: new firebase.firestore.GeoPoint(aJson.locations[0].lat, aJson.locations[0].lng),
            EndLocation: new firebase.firestore.GeoPoint(aJson.locations[1].lat, aJson.locations[1].lng),
            size: parseInt(sizeNum),
            travelDate: aJson.timeFrame
        })
    }
    // console.log(aJson)
}


function convertSize(size) {
    if (size === 'small')
        return 1;
    if (size === 'medium')
        return 2;
    if (size === 'large')
        return 3;
}

function getDriver(locations, size, timePeriod) {

    //db.collection("senders").doc('4u0PpiK4LqC6wMxhb1nF').onSnapshot(doc => {
    // console.log(doc.data());
    var driverInfo = []
    var senderStart = new Date(timePeriod[0].to)
    var senderEnd = new Date(timePeriod[1].from)
    var senderSize = size
    var senderStartLoc = locations[0]
    var senderEndLoc = locations[1]
    var filteredData = []

    var goodDrivers = db.collection('drivers').where('travelDate', '<=', senderEnd).where('travelDate', '>=', senderStart);
    goodDrivers.get().then(function (querySnapShot) {
        querySnapShot.forEach((doc) => {
           
            if (doc.data().size >= senderSize && distance(doc.data().travelLocation._lat, doc.data().travelLocation._long, senderStartLoc._lat, senderStartLoc._long, 'K') && distance(doc.data().EndLocation._lat, doc.data().EndLocation._long, senderEndLoc._lat, senderEndLoc._long, 'K')) {
                //console.log('works')
                filteredData.push(doc.data())
            }
        })
        console.log(filteredData)
    })

    driverInfo.push(filteredData.length)
    var newest = 0;
    var driverName 
    filteredData.forEach(function (element) {
        console.log(newest)
        if (newest === 0) {
            newest = element.data().travelDate;
            driverName = element.data().name;
        }
        else if (element.data().travelDate < newest) {
            newest = element.data().travelDate;
            driverName = element.data().name;
        }
    })
    driverInfo.push(driverName)
    return driverInfo
}



function distance(lat1, lon1, lat2, lon2, unit) {
    lat1 = parseFloat(lat1);
    lat2 = parseFloat(lat2);
    lon1 = parseFloat(lon1);
    lon2 = parseFloat(lon2);
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 1;
    } else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") { dist = dist * 1.609344 }
        if (unit === "N") { dist = dist * 0.8684 }
        console.log(dist)
        if (dist < 10)
            return 1;
        else
            return 0;
    }

}

export function calculator(demand, distance, size)
{
    if (size === 1){
        size = 0.55;
    } else if (size === 2){
        size = .8;
    } else {
        size = 1.25;
    }
    return distance*price_per_km*demand*size;
}

export function demand_identifier(num_shippers)
{
    var price_multiplier = 0;
    if (num_shippers >= 5) {
        price_multiplier = .8;
    } else if (num_shippers >= 10) {
        price_multiplier = .7;
    } else {
        price_multiplier = 1;
    }
    return price_multiplier;
}

export function distance_estimator(lat1, lon1, lat2, lon2){
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344

    return dist
}