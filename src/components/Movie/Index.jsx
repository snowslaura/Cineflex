import "./styles.css"

function Movie(){
    return(
        <>
            <div className="content">
                <div className="select-time">
                    <p>Selecione o horario</p>
                </div>
                <div className="schedule">
                    <div className="Day" >
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
            </div>
        </>
    )
}

export default Movie;