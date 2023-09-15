import { Header } from "../components/header/Header";
import Lkm from "../components/paragrafo/page";

export default function Teste() {
    return (
        <div>
            <Header />
            <h3>Cadastro</h3>
            <div>
        <Lkm parat={'Nome:'} span={'Luis'}/>
        <Lkm parat={'Idade:'} span={'18'}/>
        <Lkm parat={'Sexo:'} span={'Masculino'}/>
            </div>
        </div>
    )
}
