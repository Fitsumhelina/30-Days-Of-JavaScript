const countriesAPI = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const countryContainer = document.getElementById("countryContainer")
    const search = document.getElementById("search")
    data.forEach(country => {
        const countryDiv = document.createElement("div")
        countryDiv.innerText = country.name
        countryContainer.appendChild(countryDiv)
    })
    
    search.addEventListener("input", () => {
        const searchedCountry = search.value
        const filteredCountries = data.filter(country => country.name.toLowerCase().includes(searchedCountry.toLowerCase()))
        countryContainer.innerHTML = ""
        filteredCountries.forEach(country => {
            const countryDiv = document.createElement("div")
            countryDiv.innerText = country.name
            countryContainer.appendChild(countryDiv)
        })
    })
}
countriesAPI()