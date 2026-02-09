"use client";

import { useState, FormEvent } from 'react';
import { useTasks } from "@/hooks/use-tasks";

export function MainForm() {
    const [newTask, setNewTask] = useState('')

    const { addTask } = useTasks();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        addTask(newTask);

        setNewTask('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task-name" id="task-name" value={newTask} className="dark:bg-zinc-50 dark:text-black border rounded-md mr-3 px-3 py-1 w-md" onChange={e => setNewTask(e.target.value)} />
                <button className="border-purple-400 border rounded-md px-3 py-1 cursor-pointer hover:bg-purple-400 transition-all">Adicionar</button>
            </form>
        </>
    )
}