import "./styles.css"

import { useParams , Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

function Schedule(){
    const {idMovie} = useParams();
    const [schedule, setSchedule] = useState({});  

    useEffect( ()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
        promise.then( response => {
            setSchedule(response.data);
        })
        promise.catch(e => console.log(e))
    }, [idMovie]);

    console.log(schedule)

    return(
        <>
            <div className="select-time">
                <p>Selecione o horário</p>
            </div>

            {!schedule.days ? null: schedule.days.map( (day) => {
                return(
                    <>
                        <div key={day.id} className="schedules">
                            <div className="day" >
                                <p> {day.weekday} - {day.date} </p>
                                <div className="time-options">
                                    {day.showtimes.map ( (showtime) =>{
                                        return(
                                           <Link to={`/sessao/${showtime.id}`}><div className="time" key={showtime.id}>{showtime.name}</div></Link> 
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                       
                    </>
                )
            })}
            
             <footer>
                <div className="footer-content">
                    <div className="footer-movie">
                        <img src={schedule.posterURL} alt={schedule.title}/>
                    </div>
                    <div className="footer-p">
                        <p>{schedule.title}</p>
                    </div>
                </div>
            </footer>
        </>           
    )
}

export default Schedule;