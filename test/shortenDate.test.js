const date ="2018-10-07T05:19:38.566Z"

const shortenDate = (date) => {
    let dt = new Date(date);
    const year = dt.getFullYear().toString();
    const month = ("0" + (dt.getMonth() + 1)).slice(-2).toString();
    const day = ("0" + dt.getDate()).slice(-2).toString();
    console.log(year);
    console.log(month);
    console.log(day);
    return year + month + day;
}

console.log(shortenDate(date));