let countriesArray = []
function countriesData(region){
    const URL = `https://restcountries.com/v3.1/region/${region}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => sideBarCountryName(data))
}

const sideBarCountryName = (countries) => {
    const countryName = document.getElementById('name-Of-Country');
    countryName.style.marginTop ='15px';
    countryName.innerHTML = '';
    countries.forEach(country => {
        // array push
        countriesArray.push(country.name.common);
        // create li 
        const li = document.createElement('li');
        li.classList.add('list')
        li.style.cursor ='pointer';
        li.style.marginTop ='5px';
        li.style.color ='white';
        li.innerHTML = `${country.name.common}`
        li.addEventListener('click', function(){
            displayCountry(country)
        })
        countryName.appendChild(li);
    });
}
// call country

function displayCountry(country){
        const contentContainer = document.getElementById('content-container');
        const div = document.createElement('div');
        contentContainer.textContent =""
        div.classList.add('country');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${country.flags.png}" class="card-img-top shadow-lg" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${country.name.common}</h5>
                <p class="card-text">Population: ${country.population}</p>
                <button type="button"
                onclick="Modal('${(country.cca2)}')"
                 class="btn btn-primary" data-bs-toggle="modal"
                 data-bs-target="#exampleModal">
                    Details
                </button>
            </div>
        </div>
        `;
        contentContainer.appendChild(div);
}
// modal display
async function Modal(countryCode){
    const URL = `https://restcountries.com/v2/alpha/${countryCode}`
    const res = await fetch(URL)
    const data = await res.json()
    modalDisplay(data)
    
}
const modalDisplay = country => {
    const exampleModalLabel = document.getElementById('exampleModalLabel')
    exampleModalLabel.innerText = `Country name : ${country.name}`;
    const modalBody = document.getElementById('modal-body');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${country.flags.png}" class="img-fluid">
    <h6>Region: ${country.region}</h6>
    `
    modalBody.appendChild(div);
}
// search input
function searchBtn(){
    const countryName = document.getElementById('name-Of-Country');
    const inputSearch = document.getElementById('search-country')
    const name = inputSearch.value;
    inputSearch.value = '';
    let countryA = countriesArray.find(countryN => countryN.toLowerCase() !== name.toLowerCase());
    if(name === ''){
        countryName.innerText = 'Please type country name';
        countryName.style.fontSize = '20px';
        countryName.style.color = 'red';
    }
    if(countryA === true){
        countryName.innerText = 'Please type country name';
        countryName.style.fontSize = '20px';
        countryName.style.color = 'red';
    }
    else{
            const country = countriesArray.find(countriesName => name.toLowerCase() === countriesName.toLowerCase()); 
            displaySearch(country);
    }

   
}
function displaySearch(country){
    const countryName = document.getElementById('name-Of-Country');
    countryName.style.marginTop ='15px';
    countryName.textContent = '';
        const li = document.createElement('li');
        li.classList.add('list')
        li.style.cursor ='pointer';
        li.style.marginTop ='5px';
        li.style.color ='white';
        li.innerHTML = `${country}`
        countryName.appendChild(li);
        li.addEventListener('click', function(){
            displayCountry(country);
        })
}
// call region
function asiaData(){
    countriesData('asia');
}
function america(){
    countriesData('ame');
}
function AfricaData(){
    countriesData('africa');
}
function OceaniaData(){
    countriesData('Oceania');
}