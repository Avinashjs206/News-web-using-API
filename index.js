console.log('Welcome to news project');

// initialize the news api parameters
let source = 'in';
let apiKey='9ff3ac132ac04d7895d096c9c68c8955';

// Grabe the news container
newsAccordion = document.getElementById('newsAccordion');

// creat get request
const xhr = new XMLHttpRequest()
xhr.open('get', `http://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true)

// what to do when responce is ready
xhr.onload = function(){
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);
        console.log(artcles);
    }
    else{
        console.log('some error occured');
    }
}

xhr.send();

let news = `
<div class="card">
    <div class="card-header" id="headingThree">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Collapsible Group Item #3
        </button>
        </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
    </div>
</div>`