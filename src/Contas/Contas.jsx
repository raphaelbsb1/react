import React from 'react';
import "./estilo.css";

const Contas = ({ contas, removeConta }) => {

    return (
        <div id="contas">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((conta, index) => {
                        return (
                            <tr key={index}>
                                <td>{conta.nome}</td>
                                <td>{conta.descricao}</td>
                                <td>
                                    <input type="button" value="Editar" />
                                </td>
                                <td>
                                    <input type="button" value="Remover" onClick={(event) => removeConta(index)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    );
}


export default Contas;