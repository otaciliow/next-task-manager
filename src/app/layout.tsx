import type { Metadata } from "next";
import "./globals.css";

import { TaskProvider } from "@/providers/task-provider";

export const metadata: Metadata = {
  title: "Task Manager - Next",
  description: "Um gerenciador de tarefas criado utilizando next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
