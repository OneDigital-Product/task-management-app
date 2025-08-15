"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function TaskApp() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Task Creation */}
        <TaskForm />

        {/* Task Management */}
        <TaskList />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-primary">
          <div className="text-center mono-text text-sm text-muted-foreground">
            <div className="mb-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-px bg-border mb-px" />
              ))}
            </div>
            <p>©2025. All rights reserved.</p>
          </div>
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
