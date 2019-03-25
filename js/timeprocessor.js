function timeProcessor(timeInMinutes) {
    if (timeInMinutes < 60)
        return timeInMinutes  + " minutes";

    const hoursInDecimal = timeInMinutes / 60;
    const hoursInInt = parseInt(hoursInDecimal);

    if (hoursInInt < 24)
        return minutesToHourConverter(hoursInDecimal);
    if (hoursInInt >= 24 && hoursInInt < 168)
        return minutesToDaysConverter(hoursInDecimal);
    //if (hoursInInt >= 168 && hoursInInt < 730)
        //weeks
    //if (hoursInInt >= 730 && hoursInInt < 8760)
        //months
    //if (hoursInInt >= 8760)
        //year
}

function minutesToHourConverter(hoursInDecimal) {
    const hoursInInt = parseInt(hoursInDecimal);
    const minutes = parseInt( (hoursInDecimal - hoursInInt) * 60 );
    
    return hoursInInt + " hours and " + minutes + " minutes";
}

function minutesToDaysConverter(hoursInDecimal) {
    //decimal number of days
    const daysInDecimal = parseInt(hoursInDecimal) / 24;
    const daysInInt = parseInt(daysInDecimal);

    hoursInDecimal = hoursInDecimal - (daysInInt * 24);
    hoursInDecimal = hoursInDecimal + (daysInDecimal - daysInInt);

    return daysInInt + " day(s), " + minutesToHourConverter(hoursInDecimal);
}