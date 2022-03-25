import "./styles.css"
import  Enola from "./../../assets/img/enola.png"

function Schedule(){
    return(
        <>
            <div className="select-time">
                <p>Selecione o horário</p>
            </div>
            <div className="schedules">
                <div className="day" >
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className="time-options">
                        <div className="time">
                            15:00
                        </div>
                        <div className="time">
                            19:00
                        </div>
                    </div>
                </div>
                <div className="day" >
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className="time-options">
                        <div className="time">
                            15:00
                        </div>
                        <div className="time">
                            19:00
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-content">
                    <div className="footer-movie">
                        <img src={Enola} alt="enola"/>
                    </div>
                    <div className="footer-p">
                        <p>Enola Holmes</p>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Schedule;