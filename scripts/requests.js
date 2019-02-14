const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle')
    }
};

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all', {})

    if (response.status === 200) {
        const data = await response.json();
        return data.find(country => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch country')
    }
};

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=d20726d67eb050', {});

    if(response.status === 200) {
        return response.json();
    } else {
        throw new Error('Cannot fetch location');
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountry(location.country);
    return(country.name);
};