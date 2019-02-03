const price_per_km = 0.1;
const puppeteer = require('puppeteer');
var request = new XMLHttpRequest();

//Access trip information from firebase and determine frequency/availability of trips
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

export async function distance_estimator(lat_A, long_A, lat_B, long_B)
{
    let scrape = async () => {
        const browser = await puppeteer.launch();  
        const page = await browser.newPage();
        await page.goto('https://www.google.com/maps/dir/'+ lat_A + ',+-' + long_A + '/' + lat_B + ',+-' + long_B);
        await page.waitFor(1000);
    
        const distance_finder = await page.evaluate(() => {
            let distance = document.querySelector('#section-directions-trip-0 > div.section-directions-trip-description > div:nth-child(1) > div.section-directions-trip-numbers > div.section-directions-trip-distance.section-directions-trip-secondary-text > div').innerText;
    
            return distance
        });
    
        browser.close();
        return distance_finder
    }
    
    var distance = scrape().then((value) => {
        return value.replace(' km', '');
    });
return parseInt(distance);
}

export function calculator(demand, distance, size)
{
    if (size == 1){
        size = 0.75;
    } else if (size == 2){
        size = 1;
    } else {
        size = 1.25;
    }
    
    return distance*price_per_km*demand*size;
}
