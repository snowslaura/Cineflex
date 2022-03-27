import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./styles.css"


function Movies(props){
    const {data, setData} = props

    
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => setData(response.data));
        promise.catch( error => console.log(error)); 
        
    }, [setData]);

    

    return(
        <nav>
            {data.map( (movie)=>{
                return(
                    <Link to={`/filme/${movie.id}`} key={movie.id}>
                        <div className="Movie" key={movie.id}><img src={movie.posterURL} alt={movie.title} /></div> 
                    </Link>
                )
            })
            }
        </nav>
    )

}

export default Movies;