import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Main from "./Main"
import Schedule from "./Schedule/Index";
import Seat from "./Seat/Index"
import Success from "./Success/Index"




function App(){
    return(
        <>
           <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/filme/37" element={<Schedule />}/>
                    <Route path="/sessao/240" element={<Seat />}/>
                    <Route path="/sucesso" element={<Success />}/>
                </Routes>
            </BrowserRouter>
           

        </>
    )
}


export default App;