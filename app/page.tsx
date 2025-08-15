"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function TaskApp() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Task Manager</h1>
          <p className="text-muted-foreground">
            Organize your tasks with priority levels and status tracking
          </p>
        </div>
        
        <div className="space-y-6">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ConvexProvider client={convex}>
      <TaskApp />
    </ConvexProvider>
  );
}
