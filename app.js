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
        // console.log(country)
        const li = document.createElement('li');
        li.classList.add('list')
        li.style.cursor ='pointer';
        li.style.marginTop ='5px';
        li.addEventListener('click', function(){
            displayCountry(country)
        })
        li.innerHTML = `
        ${country.name.common}
        `
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
                <button type="button" onclick="ModalDisplay('${country}')"
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
function ModalDisplay(country){
    console.log('ok')
    console.log(country)
}
// search input
function searchBtn(){
    const inputSearch = document.getElementById('search-country')
    const name = inputSearch.value;
    inputSearch.value = '';
    const URL = `https://restcountries.com/v3.1/name/${name}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => display(data[0]))
}
function display(data){
    console.log(data)
    const countryName = document.getElementById('name-Of-Country');
    countryName.style.marginTop ='15px';
    countryName.innerHTML = '';
        const li = document.createElement('li');
        li.classList.add('list')
        li.style.cursor ='pointer';
        li.style.marginTop ='5px';
        li.addEventListener('click', function(){
            displayCountry(data)
        })
        li.innerHTML = `
        ${data?.name?.common}
        `
        countryName.appendChild(li);

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



















