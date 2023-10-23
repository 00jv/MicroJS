import React, { useState } from 'react';
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@jv/utils"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./App.css"


function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        emitEvent("@jv/react-route/todo/add-task", {
            id: uuid(), describe: {
                id: uuid(),
                description: newTask,
            }
        });
        setNewTask('');
    };

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
        <div className='App'>
            <div style={{ display: "center", justifyContent: "center", width: "100%", padding: "0rem" }}>
                <h1 style={{ textAlign: "center" }}>Todo List</h1>
                <p style={{ textAlign: "center" }}>Um Todo List é uma lista de tarefas que precisam ser realizadas. É uma ferramenta útil para organizar as atividades do dia a dia.</p>
                <h2>Exemplos de tarefas:</h2>
                <div>
                    <ul>
                        <li>Fazer compras no mercado</li>
                        <li>Ligar para o médico</li>
                        <li>Enviar e-mail para o chefe</li>
                        <li>Estudar para a prova</li>
                    </ul>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div>
                    <h1>Criar Tarefa</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField type="text" value={newTask} onChange={handleChange} fullWidth style={{ width: "100%" }} />
                        <Button variant='contained' type="submit" style={{ marginTop: "1rem" }}>Add Task</Button>
                    </form>
                </div>
            </div>

            <Parcel config={() => System.import("@jv/react-parcel")} />
        </div>
    );
}

export default App;
