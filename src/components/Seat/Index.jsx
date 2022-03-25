import "./styles.css"
import  Enola from "./../../assets/img/enola.png"

function Seat(){
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    return(
        <>
        <div className="select-time">
                <p>Selecione o(s) acento(s)</p>
        </div>
        <div className="seats">
            {number.map((seat)=>{
                return(
                    <div className="choose-seat">
                        {seat}
                    </div>
                )
            })}

            <div className="subtitle">
                <div className="option">
                    <div className="choose-seat selected">
                        
                    </div>
                    <p>Selecionado</p>
                </div>
           
               <div className="option">
                    <div className="choose-seat avaiable">
                    
                    </div>
                    <p>Disponível</p>
               </div>
               <div className="option">
                    <div className="choose-seat unavaiable">
                    
                    </div>
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
                <img src={Enola} alt="enola"/>
            </div>
            <div className="footer-p">
                <p>Enola Holmes</p>
                <p>Quinta-feira - 15:00</p>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Seat;