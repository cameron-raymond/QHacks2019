firebase.initializeApp(config);
const db = firebase.firestore();
const price_per_mile = 0.1*1.6;
const puppeteer = require('puppeteer');
var request = new XMLHttpRequest();

//not necessary?
export function read_db (){
    db.collection('senders').where().get('');
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

export async function distance_estimator(long_A=40.6655101, lat_A=-73.89188969999998, long_B=41.6905615, lat_B=-73.9976592)
{
    let scrape = async () => {
        const browser = await puppeteer.launch();  
        const page = await browser.newPage();
        await page.goto('https://www.google.com/maps/dir/'+ 40.930385 + ',+-' + 120.118425 + '/' + 41.087692 + ',+-' + 121.421150);
        await page.waitFor(1000);
    
        const distance_finder = await page.evaluate(() => {
            let distance = document.querySelector('#section-directions-trip-0 > div.section-directions-trip-description > div:nth-child(1) > div.section-directions-trip-numbers > div.section-directions-trip-distance.section-directions-trip-secondary-text > div').innerText;
    
            return distance
        });
    
        browser.close();
        return distance_finder
    }
    
    distance = scrape().then((value) => {
        return value.replace(' km', '');
    });
return distance;
}

export function calculator(drivers_list)
{
    return cost = distance_estimator()*price_per_km*demand_identifier(drivers_list.length);
}
