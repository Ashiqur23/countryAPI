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
        console.log(country)
        const li = document.createElement('li');
        li.classList.add('list')
        li.style.cursor ='pointer';
        li.style.marginTop ='5px';
        li.innerHTML = `
        <a onclick="displayCountry('${country}')"> ${country.name.common}</a>
        `
        countryName.appendChild(li);
    });
}
// call country
function displayCountry(countries){
    countries.forEach(country =>{
        console.log(country)
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






















function leadSearchCountry(){
    const inputSearch = document.getElementById('search-country')
    const name = inputSearch.value;
    const URL = `https://restcountries.com/v3.1/${name}'`;
    fetch(URL)
    .then(res => res.json())
    .then(data => searchBtn(data[0]))
}
leadSearchCountry()
function searchBtn(singleCountryName){
    console.log(singleCountryName)
    const countryName = document.getElementById('name-Of-Country');
    countryName.style.marginTop ='15px';
    countryName.innerHTML = '';
        const li = document.createElement('li');
        li.classList.add('list')
        li.style.cursor ='pointer';
        li.style.marginTop ='5px';
        li.innerHTML = `
        ${singleCountryName?.name?.common}
        `
        countryName.appendChild(li);
}
