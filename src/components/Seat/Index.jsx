import "./styles.css"
import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";

function Seat(){
    const [seats, setSeats] = useState({});
    const [choice, setChoice] = useState([]);
    const [select, setSelect] = useState(false);
    const {idSession} = useParams();

    useEffect( () =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
        promise.then(response => setSeats(response.data))
        promise.catch(e => console.log(e))
    },[idSession])

    function handleClick(){
        setSelect(!select)
        setChoice([...choice, seats.seats[0]])
        console.log(choice)
        console.log(select)
    }
    
    return(
        <>
            <div className="select-time">
                    <p>Selecione o(s) acento(s)</p>
            </div>

            <div className="seats">
                {!seats.seats ? null : seats.seats.map((seat)=>{
                    return(
                        <>
                            {seat.isAvailable===true?
                                <div onClick={handleClick} className="choose-seat" key={seat.id}>
                                    {seat.name}
                                </div>:
                                <div className="choose-seat unavaiable" key={seat.id}>
                                    {seat.name}
                                </div>
                            }
                        </>
                    )
                })}
                <div className="subtitle">
                    <div className="option">
                        <div className="choose-seat selected"></div>
                        <p>Selecionado</p>
                    </div>
            
                    <div className="option">
                            <div className="choose-seat avaiable"></div>
                            <p>Disponível</p>
                    </div>
                    <div className="option">
                            <div className="choose-seat unavaiable"></div>
                            <p>Indisponível</p>
                    </div>
                </div>
            </div>

            <div className="Data">
                    <p>Nome do comprador</p>
                    <input value="   Digite seu nome..."></input>
            </div>

            <div className="Data">
                    <p>CPF do comprador</p>
                    <input value="   Digite seu CPF..."></input>
            </div>

            <button>
            Reservar assento(s)
            </button>

            <footer>
            <div className="footer-content">
                <div className="footer-movie">
                    <img src={seats.movie?.posterURL} alt={seats.movie?.title}/>
                </div>
                <div className="footer-p">
                    <p>{seats.movie?.title}</p>
                    <p>{seats.day?.weekday} - {seats?.name}</p>
                </div>
            </div>
            </footer>
        </>
    )
}

export default Seat;