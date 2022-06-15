import { useEffect, useState } from "react"

const ShowCountries = () => {


    const [data, setData] = useState([]);
    const [countryList,setCountryList] = useState([]);

    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => setData(json))





    },[])

    const [userInput,setUserInput] = useState("");

    const filterCountries = (event) => {

        event.preventDefault();

        setData(data.filter(country => 
            country.name.common.toLowerCase().match(userInput.toLowerCase()))
            )

    }

    

    


        return(
            <>

    
                <section>
                    <h1>Filter country</h1>

                <form action = "" id = "country-filter" onSubmit = {filterCountries}>

            <       input type = "text" id = "countryNameInputFilter" placeholder="Filter 'all countries' list" value = {userInput} onChange={event => setUserInput(event.target.value)}/>
                    <input type = "submit" id = "filterList" />

                </form>


                </section>

                <ul>

                {data.map((country,index) => 

                ((

                    <li key = {index}  >

                        {country.name.common}
                        <input type = "checkbox"/>
                    </li>
                    
                    
                    )


                ))}

                </ul>

                
                

       


                
                

            </>
        )


}

export default ShowCountries;
