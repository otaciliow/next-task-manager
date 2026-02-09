'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

import type { Task } from '@/types/task';

type TaskContextType ={
    tasks: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const stored = sessionStorage.getItem('tasks')

        if (stored) {
            setTasks(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    const addTask = (title: string) => {
        if (!title.trim()) return;

        setTasks((prev) => [...prev, {id: Math.floor(Math.random() * 1_000_000), title: title.trim(), completed: false}]);
    };

    const toggleTask = (id: number) => {
        setTasks((prev) => prev.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, toggleTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}