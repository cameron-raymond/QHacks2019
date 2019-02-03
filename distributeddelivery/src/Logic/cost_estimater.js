firebase.initializeApp(config);
const db = firebase.firestore();
const price_per_km = 0.1;
var request = new XMLHttpRequest();

//not necessary?
export function read_db (){
    db.collection('senders').where().get('');
}

//get longitude and lattitude from geolocoation 
export function get_coords(point_A, point_B)
{

}

//Access trip information from firebase and determine frequency/availability of trips
export function demand_identifier(drivers_list)
{
    var num_shippers = shippers.length;
    if (num_shippers >= 5) {
        price_multpilier = .8;
    } else if (num_shippers >= 10) {
        price_multpilier = .7;
    } else {
        price_multpilier = 1;
    }
    return price_multpilier;
}

export function distance_estimator(long_A=44.234183, lat_A=-76.497128, long_B=45.371133, lat_B=-75.625562)
{
    var re = new RegExp('(\d+)\ km');
    var api_call = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + lat_A + ',' + long_A + '&destinations=' + lat_B + '%2C-' + long_B + '&key=AIzaSyDqaebtF2JXcBsZUILZHwq6laDy2Zaw1cg';
    request.open('GET', api_call);

    request.onload = function() {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data.row[0].elements.distance.text);
        } else {
            console.log('error');
        }
    }

    var myRegexp = /(\d+)\ km/;
    var match = myRegexp.exec(data);
    distance = match[0];

    return distance;
}

export function calculator(drivers_list)
{
    cost = distance_estimator()*price_per_km*demand_identifier(drivers_list.length)
}
