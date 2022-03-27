import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header"
import Main from "./Main"
import Schedule from "./Schedule/Index";
import Seat from "./Seat/Index"
import Success from "./Success/Index"



function App(){

    const [data, setData] = useState([]);

    return(
        <>
           <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main data={data} setData={setData} />}/>
                    <Route path="/filme/:idMovie" element={<Schedule  />}/>
                    <Route path="/sessao/:idSession" element={<Seat  />}/>
                    <Route path="/sucesso" element={<Success />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App;