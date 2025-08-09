export default function Welcome(props){
    switch(props.genero){
        case "homem":
            return <h1>Seja bem vindo {props.nome}</h1>
        case "mulher":
            return <h1>Seja bem vinda {props.nome}</h1>
        default:
            return <h1>Bem vindo(a)</h1>
    }
}
