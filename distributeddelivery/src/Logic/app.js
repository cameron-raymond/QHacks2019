// const driverList = document.querySelector('#driver-list')
// const form = document.querySelector('#add-driver-form')

// var config = {
//     apiKey: "AIzaSyDHaDZN8cLM49JxSAc0mg0kMrHrddMlbJQ",
//     authDomain: "distributeddelivery.firebaseapp.com",
//     databaseURL: "https://distributeddelivery.firebaseio.com",
//     projectId: "distributeddelivery",
//     storageBucket: "distributeddelivery.appspot.com",
//     messagingSenderId: "463943185639"
// };
// firebase.initializeApp(config);
// const db = firåebase.firestore();
// db.settings({ timestampsInSnapshots: true });

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
export function findDriver(aJson){
    console.log(aJson)
}

// // getting data


// // db.collection('drivers').get().then((snapshot) => {
// //     snapshot.docs.forEach(doc =>{
// //         console.log(doc.data())
// //     });
// // })


// // //saving sender data
// // form.addEventListener('submit',(e)=>{
// //     e.preventDefault();
// //     db.collection('senders').add({
// //         firstName: form.firstName.value,
// //         lastName: form.lastName.value,
// //         SendLocation: new firebase.firestore.GeoPoint(parseFloat(form.Slatitude.value),parseFloat(form.Slongitude.value)),
// //         EndLocation: new firebase.firestore.GeoPoint(parseFloat(form.Elatitude.value),parseFloat(form.Elongitude.value)),
// //         size: form.size.value,
// //         StartTime: form.StartTime.value, 
// //         EndTime: form.EndTime.value

// //     }).then(function(docRef) {
// //         console.log("Document written with ID: ", docRef.id);;
// //     form.firstName.value ="";
// //     form.lastName.value = "";
// // });
// // })

// //getting data
// function renderDrivers(doc) {
//     let li = document.createElement('li');
//     let lastName = document.createElement('span');
//     let travelDate = doucment.createElement('span');


//     li.setAttribute('data-id', doc.id);
//     travelDate.textContent = doc.data().travelDate;
//     lastName.textContent = doc.data().lastName;

//     li.appendChild(lastName);
//     li.appendChild(travelDate);

//     driverList.appendChild(li)
// }


// // var ref = firebase.database().ref("drivers");

// // ref.on("value", function(snapshot) {
// //  snapshot.forEach(function(childSnapshot) {
// //   var childData = childSnapshot.val();
// //   var id=childData.startTime;
// //   console.log(childData);
// //  });
// // });

// // function checkDate(sender,drivers){
// //     drivers = db.collection('drivers').get();
// //     senderStartTime = sender.data.startTime;

// // }

// // driverData = db.collection('drivers').get()



// //saving shipper data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('drivers').add({
//         firstName: form.firstName.value,
//         lastName: form.lastName.value,
//         travelLocation: new firebase.firestore.GeoPoint(parseFloat(form.Slatitude.value), parseFloat(form.Slongitude.value)),
//         EndLocation: new firebase.firestore.GeoPoint(parseFloat(form.Elatitude.value), parseFloat(form.Elongitude.value)),
//         size: parseInt(form.size.value),
//         travelDate: form.travelDate.value

//     }).then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);;
//         form.firstName.value = "";
//         form.lastName.value = "";
//     });
// })


// var senderTimeframe = [];


// var drivers = db.collection('drivers');
// drivers.get().then(function (querySnapShot) {
//     querySnapShot.forEach((doc) => {
//         //senderTimeframe[0]=doc.data.StartTime;
//         ///console.log(doc.data().EndTime)
//         //console.log(doc.data())
//     })
// })



// // var sender = db.collection('senders').doc('4u0PpiK4LqC6wMxhb1nF');
// // sender.get().then(snapshot => {
// //     snapshot.forEach(doc => {
// //         console.log(snap.data)
// //     });
// // });

// var newSender;
// db.collection("senders").doc('4u0PpiK4LqC6wMxhb1nF').onSnapshot(doc => {
//     // console.log(doc.data());
//     senderStart = new Date(doc.data().StartTime)
//     senderEnd = new Date(doc.data().EndTime)
//     senderSize = doc.data().size
//     senderStartLoc = doc.data().SendLocation
//     senderEndLoc = doc.data().EndLocation
    
//     var goodDrivers = db.collection('drivers').where('travelDate', '<=', senderEnd).where('travelDate', '>=', senderStart);
//     goodDrivers.get().then(function (querySnapShot) {
//         var filteredData = []
//         querySnapShot.forEach((doc) => {
//             console.log(doc.data().travelLocation)
//             console.log(doc.data().firstName)
//             console.log(doc.data().size)
//             console.log(senderSize)
//             if(doc.data().size >= senderSize  && distance(doc.data().travelLocation._lat,doc.data().travelLocation._long,senderStartLoc._lat,senderStartLoc._long,'K') && distance(doc.data().EndLocation._lat,doc.data().EndLocation._long,senderEndLoc._lat,senderEndLoc._long,'K')){
//                 console.log('works')
//                 filteredData.push(doc.data())
//         }
//         })
//         console.log(filteredData)
        
//     })


//     //drivers = getDrivers(newSender);
//     //console.log(senderStart)
// })


//     function distance(lat1, lon1, lat2, lon2, unit) {
//         if ((lat1 == lat2) && (lon1 == lon2)) {
//             return 1;
//         }
//         else {
//             var radlat1 = Math.PI * lat1/180;
//             var radlat2 = Math.PI * lat2/180;
//             var theta = lon1-lon2;
//             var radtheta = Math.PI * theta/180;
//             var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//             if (dist > 1) {
//                 dist = 1;
//             }
//             dist = Math.acos(dist);
//             dist = dist * 180/Math.PI;
//             dist = dist * 60 * 1.1515;
//             if (unit=="K") { dist = dist * 1.609344 }
//             if (unit=="N") { dist = dist * 0.8684 }
//             console.log(dist)
//             if(dist<10)
//                 return 1;
//             else
//                 return 0;
//         }

//     }
  

// // function getDrivers(Sender){
// //     senderStart = new date(sender.data().StartTime);
// //     senderEnd = new date(sender.data().EndTime);
// //     var goodDrivers;
// //     var drivers = db.collection('drivers');
// //     drivers.get().then(function(querySnapShot){
// //         querySnapShot.forEach((doc)=> {
// //          driverdate = new Date(doc.data().travelDate);
// //             if (driverdate <= senderEnd && driverdate >= senderStart)
// //                 goodDrivers.push(doc.data)
// //         })
// //         return goodDrivers
// //     })

// // }

// function getWithinDistance(sender, drivers) {

// }


// function checkDate(sender, drivers) {
//     drivers = db.collection('drivers').get();
//     senderStartTime = sender.data.startTime;

// }
// // sender.get().then(function(querySel){
// //     querySel.c
// // }
// // sender.get().then(function(send){
// //         send.forEach((docref)=> {
// //         console.log(docref.data())
// //     })
// // })

// /*
// //saving shipper data
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     db.collection('shipers').add({
//         firstName: form.firstName.value,
//         lastName: form.lastName.value,
//         Slongitude: form.Slongitude.value,
//         Slatitude: form.Slatitude.value,
//         Elongitude: form.Dlongitude.value,
//         Elatitude: form.Dlatitude.value,
//         size: form.size.value

//     });
//     form.firstName.value ="";
//     form.lastName.value = "";
//     form.Slongitude.value ='';
//     form.Slatitude.value = '';
//     form.Elatitude.value = '';
//     form.Elongitude.value = '';

// }) */