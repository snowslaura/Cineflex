import "./styles.css"
import { useParams , useNavigate} from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";

function Seat(props){

    const {choosenDataSeat,
            setChoosenDataSeat, 
            cpf,
            setCpf,
            nome, 
            setNome,
            setMovie} = props

    const {idSession} = useParams();
    const [seats, setSeats] = useState({});
    const [newSeats, setNewSeats] = useState([]);
    const navigate = useNavigate();
    

    useEffect( () =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
        promise.then(response => {
            setSeats(response.data)
            setNewSeats(response.data.seats)
            setMovie(response.data)
        })
        promise.catch(e => console.log(e))
    },[idSession,setMovie])

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
        const choosenSeat = newSeats.filter(newSeat => newSeat.isSelected === true)
        setChoosenDataSeat(choosenSeat)

        console.log("Nova array de assentos: ", newSeats)
        console.log("Array só com assento escolhido: ", choosenSeat)
    }

    function submitData(event){
        event.preventDefault();
        if(choosenDataSeat.length<1){
            alert("Escolha ao menos um assento")
            return
        } 

        const body = {
            ids: choosenDataSeat.map(seat => seat.id),
            name: nome,
            cpf: cpf
        }
        const request = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)
        request.then(navigate("/sucesso"))
        
    }

          
    return(
        <>
            <div className="select-time">
                    <p>Selecione o(s) assento(s)</p>
            </div>
            <div className="main">
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
                        <form onSubmit={submitData}>
                            <label for="campoNome" >Nome do comprador</label>
                            <input type="text" id="campoNome"value={nome} required onChange={(event) => setNome(event.target.value)} placeholder="   Digite seu nome..."></input>
                            
                            <label for="campoCPF">CPF do comprador</label>
                            <input type="text" id="campoCPF" value={cpf} required onChange={(event) => setCpf(event.target.value)} placeholder="   Digite seu CPF..."></input>
                            
                            <button >
                            Reservar assento(s)
                            </button>
                        </form>
                </div>

            </div>
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