import Enola from "./../../assets/img/enola.png"
import "./styles.css"

function Main(){
    return(
        <>
            <div className="Main">
                <div className="Select">
                    <p>Selecione o filme</p>
                </div>
                <nav>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                    <div className="Movie" ><img src={Enola} alt="enola" /></div>
                </nav>
            </div>
        </>
    )
}

export default Main;