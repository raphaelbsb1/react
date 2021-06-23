import React from 'react';
import "./estilo.css";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";

const Contas = ({ contas, removeConta, editarConta }) => {

    return (
        <div id="contas">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((conta, index) => {
                        return (
                            <tr key={index}>
                                <td>{conta.nome}</td>
                                <td>{conta.descricao}</td>
                                <td>
                                    <img src={editIcon} alt="Editar" onClick={() => editarConta(index)}  />
                                    <img src={deleteIcon} alt="Remover" onClick={() => removeConta(index)}  />
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