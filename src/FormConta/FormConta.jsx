import React, {useState} from 'react';
import "./estilo.css";

const FormConta = ({salvar}) => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    return (
        <form id="conta">
            <h1>Dados Conta</h1>
            <label>Nome</label>
            <input type="text" name="nome" id="nome" onChange={(event) => setNome(event.target.value)} />
            <label>Descrição</label>
            <input type="text" id="descricao" name="descricao" onChange={(event) => setDescricao(event.target.value)} />
            <input type="button" value="Salvar" onClick={(event) => {
                salvar({nome, descricao});
            }} />


        </form>
    );

}

export default FormConta;