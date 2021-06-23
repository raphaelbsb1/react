import React, { useState } from 'react';
import "./estilo.css";

const axios = require('axios');

const Cep = () => {
    const [dados, setDados] = useState("");
    const [cep, setCep] = useState("01001000");

    return (
        <div id="cep">
            <h1>Serviço CEP</h1>
            <label>CEP</label>
            <input type="number" maxLength="8" placeholder="Digite um cep. Ex.:01001000 " onChange={(event) => setCep(event.target.value.toString())} />
            <input type="button" value="Verificar" onClick={async () => {
                const urlService = "http://viacep.com.br/ws/".concat(cep).concat("/json/");
                const response = await axios.get(urlService);
                console.log(response);
                setDados(JSON.stringify(response.data));
            }} />
            <p>{dados}</p>
        </div>
    );
}

export default Cep;