import "./cardDisciplina.css"

interface CardDisciplinaProps {
    nome: string
    cargaHoraria: number
    professor: string
    concluida: boolean
}

function CardDisciplina({nome, cargaHoraria, professor, concluida = false}: CardDisciplinaProps){

    return(
        <div className="card-disciplina">
            <h2>{nome}</h2>
            <h3>Carga Horária: {cargaHoraria}</h3>
            <p>Professor: {professor}</p>
            <p>Concluida: {concluida ? "Sim" : "Não"}</p>
        </div>
    )
}

export default CardDisciplina