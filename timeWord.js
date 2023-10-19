function timeWord(timeString) {
    if (timeString.length !== 5) {
        return ("time has to be in 00:00 format")
    }
    let noColon = timeString.replace(":", "");
    let stillCounts = "1" + noColon;
    let time = +stillCounts;
    let hour = ""
    let minute = ""
    let amOrPm = ""
    if (time === 10000) {
        return "midnight"
    }
    if (time === 11200) {
        return "noon"
    }
    //AM or PM
    if (time > 11200) {
        amOrPm = "pm"
    } else {
        amOrPm = "am"
    }
    //Isoloate hours
    let hours = Math.trunc(time / 100)
    if (hours > 123) {
        throw Error("Hours must be from 00 to 23")
    }
    else if (hours === 100 || hours === 112) {
        hour = "twelve"
    }
    else if (hours === 101 || hours === 113) {
        hour = "one"
    }
    else if (hours === 102 || hours === 114) {
        hour = "two"
    }
    else if (hours === 103 || hours === 115) {
        hour = "three"
    }
    else if (hours === 104 || hours === 116) {
        hour = "four"
    }
    else if (hours === 105 || hours === 117) {
        hour = "five"
    }
    else if (hours === 106 || hours === 118) {
        hour = "six"
    }
    else if (hours === 107 || hours === 119) {
        hour = "seven"
    }
    else if (hours === 108 || hours === 120) {
        hour = "eight"
    }
    else if (hours === 109 || hours === 121) {
        hour = "nine"
    }
    else if (hours === 110 || hours === 122) {
        hour = "ten"
    }
    else if (hours === 111 || hours === 123) {
        hour = "eleven"
    }
    //minutes 
    let arrNums = Array.from(time.toString()).map(Number);
    let minNums = arrNums.slice(-2);
    let jNums = minNums.join("")
    let minutes = +jNums;
    console.log("minutes =", minutes.toString())
    if (minutes > 59) {
        return ("error! Minutes cannot exceed 60")
    }
    else if (minutes === 0) {
        minute = " o'clock"
    }
    else if (minutes === 10) {
        minute = " ten"
    }
    else if (minutes === 11) {
        minute = " eleven"
    }
    else if (minutes === 12) {
        minute = " twelve"
    }
    else if (minutes === 13) {
        minute = " thirteen"
    }
    else if (minutes === 14) {
        minute = " fourteen"
    }
    else if (minutes === 15) {
        minute = " fifteen"
    }
    else if (minutes === 16) {
        minute = " sixteen"
    }
    else if (minutes === 17) {
        minute = " seventeen"
    }
    else if (minutes === 18) {
        minute = " eighteen"
    }
    else if (minutes === 19) {
        minute = " nineteen"
    }
    else if (minutes >= 20 && minutes < 30) {
        minute = " twenty"
    }
    else if (minutes >= 30 && minutes < 40) {
        minute = " thirty"
    }
    else if (minutes >= 40 && minutes < 50) {
        minute = " fourty"
    }
    else if (minutes >= 50 && minutes < 60) {
        minute = " fifty"
    }

    let arrMin = Array.from(minutes.toString()).map(Number);
    let minMin = arrMin.slice(-1);
    let jMin = minMin.join("");
    let theMin = +jMin;
    console.log(theMin)
    if (minutes < 10 && minutes > 0) {
        minute = " oh"
    } else {
        minute = minute;
    }
    if (theMin === 1 && minutes !== 11) {
        minute = minute + " one"
    }
    else if (theMin === 2 && minutes !== 12) {
        minute = minute + " two"
    }
    else if (theMin === 3 && minutes !== 13) {
        minute = minute + " three"
    }
    else if (theMin === 4 && minutes !== 14) {
        minute = minute + " four"
    }
    else if (theMin === 5 && minutes !== 15) {
        minute = minute + " five"
    }
    else if (theMin === 6 && minutes !== 16) {
        minute = minute + " six"
    }
    else if (theMin === 7 && minutes !== 17) {
        minute = minute + " seven"
    }
    else if (theMin === 8 && minutes !== 18) {
        minute = minute + " eight"
    }
    else if (theMin === 9 && minutes !== 19) {
        minute = minute + " nine"
    }
    console.log(hour + minute + " " + amOrPm)
    return (hour + minute + " " + amOrPm)
}

module.exports = timeWord;