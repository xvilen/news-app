console.log("heyyy");
// 3120b997ded944b1ab016e3343a07e8d
country = 'us'
let apiKey = '3120b997ded944b1ab016e3343a07e8d'
let newsaccordian = document.getElementById('newsaccordian')


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=nz&apiKey=3120b997ded944b1ab016e3343a07e8d', true);
let status = 200
xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText)
        console.log(json)
        let articals = json.articles;

        let newshtml = "";
        articals.forEach(function(elements, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed
                                +-" type="button" data-toggle="collapse" data-target="#collapse${index}"        aria-expanded="true" aria-controls="collapse${index}">
                                  <b> news ${index+1}:</b> ${elements.title}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordian">
                                <div class="card-body">
                                ${elements["content"]} .  <a href=${elements.url} target="_blank">read more here</a>
                                </div>
                            </div>
                        </div>`;
            newshtml += news;
        });
        newsaccordian.innerHTML = newshtml;

    }

}
xhr.send()