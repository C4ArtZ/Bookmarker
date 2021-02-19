const getBookmark = async () => {
    let url = 'xxx';
    let username = 'xxx';
    let password = 'xxx'
    let headers = new Headers();

    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    const response = await fetch(url,{
        method: 'GET',
        headers: headers,
    });

    const myJson = await response.json(); //extract JSON from the http response
    //console.log(myJson);
    document.getElementById('text').innerText = JSON.parse(myJson);
}