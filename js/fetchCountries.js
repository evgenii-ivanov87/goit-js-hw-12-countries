

function fetchCountries(searchQuery) {
    const url = 'https://restcountries.eu/rest/v2/name/{name}'
    
    return fetch(url)
        .then(res => res.json())
        .then(({ name }) => name);
};

export default  fetchCountries