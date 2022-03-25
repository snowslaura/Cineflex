import "./styles.css"

function Success(){
    return(
        <>
        <div className="header">
            <p>Pedido feito</p>
            <h1> com sucesso!</h1>
        </div>
        <div className="information">
            <p>Filme e sessão</p>
            <h1> Enola Holmes</h1>
            <h1> 24/06/2021 15:00</h1>
        </div>
        <div className="information">
            <p>Ingressos</p>
            <h1> Assento 15</h1>
            <h1> Assento 16</h1>
        </div>
        <div className="information">
            <p>Pedido feito</p>
            <h1> Nome: João da Silva Sauro</h1>
            <h1>CPF: 123.456.789-10</h1>
        </div>
        <button>
            Reservar assento(s)
        </button>

        </>
    )
}

export default Success;