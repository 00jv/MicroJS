import React, { useEffect, useState } from 'react';
import { listenEvent } from "@jv/utils";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';


function TodoList({ name = 'TodoList' }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        listenEvent("@jv/react-route/todo/add-task", event => {
            console.log("Received task:", event.detail);
            setTasks(oldTasks => [...oldTasks, event.detail.describe]);
        });
    }, []);

    function handleDeleteTask(id) {
        setTasks(oldTasks => oldTasks.filter(task => task.id !== id));
    }

    return (
        <>
            <h1>Listagem</h1>
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{textAlign: "center"}}>Código</TableCell>
                            <TableCell style={{textAlign: "center"}}>Descrição</TableCell>
                            <TableCell style={{textAlign: "center"}}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ alignItems: "center" }}>
                        {tasks.length === 0 && <TableRow><TableCell colSpan={3} style={{textAlign: "center"}}>Nenhuma tarefa cadastrada</TableCell></TableRow>}
                        {tasks.map(task => (
                            <TableRow key={task.id}>
                                <TableCell style={{ textAlign: "center" }}>{task.id}</TableCell>
                                <TableCell style={{ textAlign: "center" }}>{task.description === "" ? "Sem descrição" : task.description}</TableCell>
                                <TableCell style={{ textAlign: "center" }}>
                                    <Button onClick={() => handleDeleteTask(task.id)} variant='contained'><DeleteIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </>
    );
}

export default TodoList;
