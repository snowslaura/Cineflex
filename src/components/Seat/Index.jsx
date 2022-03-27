import "./styles.css"
import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";

function Seat(){
    const [seats, setSeats] = useState({});
    const [newSeats, setNewSeats] = useState([]);
    const {idSession} = useParams();

    useEffect( () =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
        promise.then(response => {
            setSeats(response.data)
            setNewSeats(response.data.seats)
        })
        promise.catch(e => console.log(e))
    },[idSession])

    function seatSelected(id, isAvailable) {
        if ( !isAvailable ){ 
            alert('Este assento está indisponivel!')
            return
        }

        const newSeats = seats.seats.map(seat => {
            if( seat.id === id) {
                seat.isSelected = !seat.isSelected
            }
            return seat;
        })

        setNewSeats(newSeats)
        const choosenSeatIds = newSeats.filter(newSeat => newSeat.isSelected === true).map(newSeat => newSeat.id)

        console.log("Nova array de assentos: ", newSeats)
        console.log("Array só com assento escolhido: ", choosenSeatIds)
    }

         
    return(
        <>
            <div className="select-time">
                    <p>Selecione o(s) acento(s)</p>
            </div>
            <div className="seats">
                {!seats.seats ? null : newSeats.map((seat)=>{
                    return(
                        <>
                        <div key={seat.id} onClick={() => seatSelected(seat.id, seat.isAvailable)} className={`choose-seat ${seat.isAvailable} ${seat.isSelected ? 'selected' : ''}`} >{seat.name}</div>
                        </>
                    )
                })}
            </div>
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

            <div className="Data">
                    <p>Nome do comprador</p>
                    <input placeholder="   Digite seu nome..."></input>
            </div>

            <div className="Data">
                    <p>CPF do comprador</p>
                    <input placeholder="   Digite seu CPF..."></input>
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