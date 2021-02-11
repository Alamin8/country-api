fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => allContriesInfo(data))

function allContriesInfo(contries) {
    const allContryContainer = document.getElementById('all-country-container')
    contries.forEach(allContries => {
        const country = document.createElement('div')
        country.innerHTML = `
        <h1>${allContries.name}</h1>
        <p>Capital: ${allContries.capital}</p>
        <button onclick="showCountriesDetails('${allContries.name}')">Details</button>
        `
        country.className = 'country'
        allContryContainer.appendChild(country)
    });
}

const showCountriesDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = ClickCountry => {
    const clickCountryDetailsDiv = document.getElementById('click-country-details-div')
    clickCountryDetailsDiv.innerHTML = ''
    const clickCountryDetails = document.createElement('div')
    clickCountryDetails.innerHTML = `
    <h1>${ClickCountry.name}</h1>
    <p>Capital: ${ClickCountry.capital}</p>
    <p>Population: ${ClickCountry.population}</p>
    <p> Area: ${ClickCountry.area} sq km.</p>
    <img src='${ClickCountry.flag}'>
    `
    clickCountryDetails.className = 'country-details'
    clickCountryDetailsDiv.appendChild(clickCountryDetails)
}