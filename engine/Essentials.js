import { DateTime } from "luxon";
// const { DateTime } = require("luxon");

//Create a greeting based on the time of the day
export function greet()
{
    const currentTimeDate = DateTime.now();
    // console.log(currentTimeDate.hour);

    if (currentTimeDate < 12) {
        // console.log('Good morning');
        return 'Good morning';
    } else if (currentTimeDate >= 12 && currentTimeDate < 17) {
        // console.log('Good afternoon');
        return 'Good afternoon';
    }

    // console.log('Good evening');
    return 'Good evening';
}

// greet();