import "./styles.css"

function Success(props){
    const{ cpf, nome, choosenDataSeat, movie} = props
    console.log(choosenDataSeat)
    return(
        <>
        <div className="header">
            <p>Pedido feito</p>
            <h1> com sucesso!</h1>
        </div>
        <div className="information">
            <p>Filme e sessão</p>
            <h1> {movie.movie.title}</h1>
            <h1> {movie.day.date} {movie.name}</h1>
        </div>
        <div className="information">
            <p>Ingressos</p>
            {choosenDataSeat.map((choosenSeat) =>{
                return(<h1 key={choosenSeat.id}> Assento {choosenSeat.name} </h1>)})
            }
        </div>
        <div className="information">
            <p>Pedido feito</p>
            <h1> Nome: {nome}</h1>
            <h1>CPF: {cpf}</h1>
        </div>
        <button>
            Reservar assento(s)
        </button>

        </>
    )
}

export default Success;