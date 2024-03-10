//React...
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


//styles...
import "./Browse.css"


const Browse = () => {

    const [filter, setFilter] = useState("all")

    const [countryName, setCountryName] = useState("");

    const [countryList, setCountryList] = useState([
        // {
        //     name: "EMPEROR CITY",
        //     officialName: "SOCKS",
        //     population: 2142314,
        //     region: "SKY",
        //     capital: "Cloudy",
        //     image: "https://miro.medium.com/v2/resize:fit:1400/1*TzaiFDmkiEkOxNU7eG43pw.jpeg"
        // },
        // {
        //     name: "EMPEROR CITY",
        //     officialName: "SOCKS",
        //     population: 2142314,
        //     region: "SKY",
        //     capital: "Cloudy",
        //     image: "https://miro.medium.com/v2/resize:fit:1400/1*TzaiFDmkiEkOxNU7eG43pw.jpeg"
        // },
        // {
        //     name: "Immortals of swords",
        //     officialName: "Sword-cantalope",
        //     population: 135834848,
        //     region: "Dimensional",
        //     capital: "sword mount",
        //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTL71W2u3jfYvvp2MXCfvVwHoyM-cioxCZkA&usqp=CAU"
        // },
        // {
        //     name: "Immortals of swords",
        //     officialName: "Sword-cantalope",
        //     population: 135834848,
        //     region: "Dimensional",
        //     capital: "sword mount",
        //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTL71W2u3jfYvvp2MXCfvVwHoyM-cioxCZkA&usqp=CAU"
        // },
        // {
        //     name: "United States",
        //     officialName: "united doors",
        //     population: 888293,
        //     region: "North America",
        //     capital: "wash",
        //     image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"
        // },
        // {
        //     name: "United Dynasties",
        //     officialName: "young master associates",
        //     population: 13383858,
        //     region: "Gatorate",
        //     capital: "CHAP",
        //     image: "https://www.dumpaday.com/wp-content/uploads/2017/01/random-pictures-116.jpg"
        // },
        // {
        //     name: "United Dynasties",
        //     officialName: "young master associates",
        //     population: 13383858,
        //     region: "Gatorate",
        //     capital: "CHAP",
        //     image: "https://www.dumpaday.com/wp-content/uploads/2017/01/random-pictures-116.jpg"
        // },
        // {
        //     name: "United Dynasties",
        //     officialName: "young master associates",
        //     population: 13383858,
        //     region: "Gatorate",
        //     capital: "CHAP",
        //     image: "https://www.dumpaday.com/wp-content/uploads/2017/01/random-pictures-116.jpg"
        // },
        // {
        //     name: "United Dynasties",
        //     officialName: "young master associates",
        //     population: 13383858,
        //     region: "Gatorate",
        //     capital: "CHAP",
        //     image: "https://www.dumpaday.com/wp-content/uploads/2017/01/random-pictures-116.jpg"
        // }
    ]);


    const getInfo = async () => {
        const apiURL = `https://restcountries.com/v3.1/${filter}/`;
      
        try {
          const response = await fetch(apiURL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json(); // Parse JSON response
          setCountryList(data)
          // Handle fetched data
        } catch (error) {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
        }
    };



    useEffect(() => {
        getInfo()
    }, [filter])
      



    return (
        <section id="browsing_section">

            <nav>
                <input placeholder="Search..."/>
                <select id="dropdown" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Choose an option</option>
                    <option value="all">All</option>
                    <option value="name">Name</option>
                    <option value="currency">Currency</option>
                    <option value="capital">Language</option>
                    <option value="region">Region</option>
                </select>
            </nav>

            <div id="countries_list">
                {countryList &&
                    countryList.map((country, i) => {
                        return (
                            <Link 
                                key={i}
                                to={`/browse/${country?.name?.common}`} 
                                className="country_blocks"
                            >
                                <img src={country.flags.png} alt="image of country"/>
                                <div className="country_blocks_info">
                                    <h1>{country.name.common}</h1>
                                    <div>
                                        <div>Population: {country.population}</div>
                                        <div>Region: {country.region}</div>
                                        <div>Capital {country.capital}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                } 
            </div>
        </section>
    );
};

export default Browse;