let url = "https://www.economist.com/middle-east-and-africa/2018/10/07/saudi-arabias-repression-reaches-istanbul";

const shortenUrl = (url) => {
    let shorten = '';
    const splits = url.split('/');
    console.log(splits.slice(0,3).join('/'));
    console.log(splits.slice(2,3).join('/'));
}

shortenUrl(url);