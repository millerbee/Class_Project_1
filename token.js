var key="52qY5IyPWrS9w0ojPIgY2MfKslGnkwGgFnimiE0CabIpNTX4yZ";
var secret="N8eZu28D38ezN6Mt8nVOarJji6wExa3b0mPgBAzd";

let token=""

function getToken() {
    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: "POST",
        body: "grant_type=client_credentials&client_id=" + key + "&client_secret=" + secret,
         headers: {
           "Content-Type": "application/x-www-form-urlencoded"
           
        }
    }).then(function(resp) {
    return resp.json();
    }).then(function(data) {
    token= data
    console.log('token', data)})
}
getToken();