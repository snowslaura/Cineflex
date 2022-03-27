import Movies from "../Movies/Index";
import "./styles.css"


function Main(props){

     const {data, setData} = props

    return(
        <>
            <div className="Main">
                <div className="Select">
                    <p>Selecione o filme</p>
                </div>
             <Movies data={data} setData={setData}/>
            </div>
        </>
    )
}

export default Main;