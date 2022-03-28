import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header"
import Main from "./Main"
import Schedule from "./Schedule/Index";
import Seat from "./Seat/Index"
import Success from "./Success/Index"



function App(){

    const [data, setData] = useState([]);
    const [choosenDataSeat, setChoosenDataSeat] = useState([]);
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [movie, setMovie] = useState([]);

    function resetData(){
        setData([]);
        setCpf("");
        setNome("");
        setMovie([]);
        setChoosenDataSeat([]);
    }


    return(
        <>
           <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main data={data} setData={setData} />}/>
                    <Route path="/filme/:idMovie" element={<Schedule  />}/>
                    <Route path="/sessao/:idSession" element={<Seat
                                                               choosenDataSeat ={choosenDataSeat}
                                                               setChoosenDataSeat={setChoosenDataSeat}
                                                               setCpf={setCpf}
                                                               cpf={cpf}
                                                               nome={nome}
                                                               setNome={setNome}
                                                               setMovie={setMovie} />}/>
                    <Route path="/sucesso" element={<Success resetData={resetData}
                                                             cpf={cpf}
                                                             nome={nome}
                                                             movie={movie}
                                                             choosenDataSeat ={choosenDataSeat}/>} />
               </Routes >                                             
            </BrowserRouter>
        </>
    )
}


export default App;