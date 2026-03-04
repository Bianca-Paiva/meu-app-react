import CardAluno from "../CardAluno/CardAluno"
import Rodape from "../Rodape/Rodape"
import "./homePage.css"

interface Aluno {
    id: number
    nome: string
    curso: string
    descricao: string
    status: boolean
}

const alunos: Aluno[] = [
    { id: 1, nome: "Bianca S. Paiva", curso: "TDS03", descricao: "Aluno inteligente", status: true },
    { id: 2, nome: "Heitor Guimarães", curso: "TDS03", descricao: "Aluno inteligente", status: true },
    { id: 3, nome: "Felipe Aragão da Silva", curso: "TDS03", descricao: "Aluno inteligente", status: false }
]

function HomePage() {

    const nomeCurso = "Técnico em Desenvolvimento de Sistemas"
    const ano = new Date().getFullYear()

    return (
        <>
            <header>
                <h1>Senac - {nomeCurso}</h1>
                <h2>Ano - {ano}</h2>
            </header>

            <div className="container-card">

                {
                    alunos.map((aluno) => (
                        <CardAluno
                            key={aluno.id}
                            nomeAluno={aluno.nome}
                            curso={aluno.curso}
                            textoAluno={aluno.descricao}
                            status={aluno.status}
                        />
                    ))
                }
            </div>


            <Rodape />
        </>
    )
}

export default HomePage