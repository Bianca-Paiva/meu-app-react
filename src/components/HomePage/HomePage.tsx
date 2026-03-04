import CardAluno from "../CardAluno/CardAluno"
import Rodape from "../Rodape/Rodape"
import "./homePage.css"


function HomePage() {

    const nomeCurso = "Técnico em Desenvolvimento de Sistemas"
    const ano = new Date().getFullYear()

    return (
        <>
            <header>
                <h1>Senac - {nomeCurso}</h1>
                <h2>Ano - {ano}</h2>
            </header>

            <CardAluno 
                nomeAluno="Bianca S. Paiva"
                curso="TDS03"
                textoAluno="Aluno inteligente pra caralho!"
                status = {true}
            />

            <CardAluno 
                nomeAluno="Heitor Guimarães"
                curso="TDS03"
                textoAluno="Aluno inteligente pra caralho!"
                status = {true}
            />

            <CardAluno 
                nomeAluno="Felipe Aagão da Silva"
                curso="TDS03"
                textoAluno="Aluno inteligente pra caralho!"
                status = {true}
            />
            
            <Rodape/>
        </>
    )
}

export default HomePage