import Image from "next/image";
import { MainForm } from "@/components/mainForm";
import { TasksList } from "@/components/tasksList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col justify-center items-center gap-3 border-purple-500 rounded-md border p-5">
        <h1 className="font-bold text-2xl">Task Manager - Next</h1>
        <h2>Seu gerenciador de tarefas pessoal! Para adicionar uma nova tarefa, basta digitar sua descrição abaixo e clicar no botão!</h2>
        <MainForm />
        <TasksList />
      </main>
    </div>
  );
}
