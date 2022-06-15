// import ShowCountries from "./ShowCountries";





// const CountrySearch = () => {

//     function filterAllCountryList(countryName){

//         const fetchPromise = fetch(`https://restcountries.com/v2/all`);
    
//         fetchPromise.then(response => response.json()).then(countryAll => {
    
    
//             const unorderedList = document.querySelector("#AllCountriesUl");
    
//             unorderedList.innerText = " ";
//             unorderedList.innerText = countryAll.filter(country => country.name.toLowerCase().match(countryName)).map(country => `Country name: ${country.name}, Population: ${country.population} \n`);
    
//             // const filteredResult = countryAll.filter(country => country.name.match(countryName));
//             // const filteredLIst = filteredResult.map(country => `Country name: ${country.name}, Population: ${country.population} \n`);
//             // const newAllCountryList = document.createElement("li");
//             // newAllCountryList.innerText = filteredLIst;
//             // unorderedList.appendChild(newAllCountryList);
    
//             console.log(countryAll.filter(country => country.name.match(countryName)));
    
            
            
    
    
    
    
    
//         })



//     return(

        // <>
        // <section>
        // <h1>Filter country</h1>

        // <form action = "" id = "country-filter">

        //     <input type = "text" id = "countryNameInputFilter" placeholder="Filter 'all countries' list"/>
        //     <input type = "submit" id = "filterList"/>

        // </form>


        // </section>

        // </>



//     )






// }

// export default CountrySearch;