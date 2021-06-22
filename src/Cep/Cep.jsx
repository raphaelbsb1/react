import React, { useState } from 'react';
const axios = require('axios');

const Cep = () => {
    const [dados, setDados] = useState("");
    const [cep, setCep] = useState("01001000");

    return (
        <div>
            <h1>Serviço CEP</h1>
            <input type="number" maxLength="8" onChange={(event) => setCep(event.target.value.toString())} />
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