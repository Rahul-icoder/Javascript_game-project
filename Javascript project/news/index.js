console.log('this is news api webpages');

//Initialize the news api parameters
// let country = "in"
const proxy = "https://cors-anywhere.herokuapp.com/"
let apikey = '81aef11ecf294251a71c2182aff89476';

//grab the news container
let newsaccordion = document.getElementById('accordion');

const xhr = new XMLHttpRequest();
xhr.open('GET',`${proxy}http://newsapi.org/v2/top-headlines?country=in&apiKey=81aef11ecf294251a71c2182aff89476`,true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log('true');
        console.log(articles);
        let newshtml = "";
        articles.forEach((element, index) => {
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;
          newshtml += news;
        });
        newsaccordion.innerHTML = newshtml;
    }
    else{
        console.log('some error occured');
    }
}
xhr.send();