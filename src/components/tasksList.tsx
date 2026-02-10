'use client';

import { useTasks } from "@/hooks/use-tasks"

import { SquareCheck, Trash2 } from 'lucide-react';

export function TasksList() {

    const { tasks, toggleTask, deleteTask } = useTasks();

    return (
        <>
            <ul className="flex flex-col gap-3">

                {tasks.length == 0 
                    ? 
                        <div>Você ainda não cadastrou nenhuma tarefa para exibir aqui...</div> 
                    :
                        tasks.map((task) => (
                        <li key={task.id} className={`flex justify-between gap-5 w-100 ${task.completed ? 'line-through text-zinc-500' : ''}`}>
                            {task.title}
                            <div className="flex gap-1 items-center">
                                <SquareCheck className={`cursor-pointer hover:text-green-400 transition-all duration-125 ${task.completed ? 'text-green-500' : ''}`} onClick={() => toggleTask(task.id)} />
                                <Trash2 className="cursor-pointer hover:text-red-400 transition-all duration-125" onClick={() => deleteTask(task.id)} />
                            </div>
                        </li>
                    ))}
            </ul>
        </>
    )
}