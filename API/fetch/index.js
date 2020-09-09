console.log('here is mordern fetching style');

let url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=81aef11ecf294251a71c2182aff89476';
function getData(){
    fetch(url).then((response) =>{
        return response.json();
    }).then((data) =>{
        console.log(data);
    })
}
getData();