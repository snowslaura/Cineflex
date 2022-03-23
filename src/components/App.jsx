import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main"
import Movie from "./Movie/Index"
import Seat from "./Seat/Seat";




function App(){
    return(
        <>
           <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/filme/37" element={<Movie />}/>
                    <Route path="/sessao/240" element={<Seat />}/>


                </Routes>
            </BrowserRouter>
           

        </>
    )
}


export default App;