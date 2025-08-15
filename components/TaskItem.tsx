"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Id } from "@/convex/_generated/dataModel";

interface Task {
  _id: Id<"tasks">;
  title: string;
  status: "pending" | "completed";
  priority: "high" | "medium" | "low";
  createdAt: number;
}

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const toggleStatus = useMutation(api.tasks.toggleStatus);
  const removeTask = useMutation(api.tasks.remove);

  const handleToggleStatus = async () => {
    try {
      await toggleStatus({ id: task._id });
    } catch (error) {
      console.error("Failed to toggle task status:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await removeTask({ id: task._id });
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "high":
        return "high";
      case "medium":
        return "medium";
      case "low":
        return "low";
      default:
        return "default";
    }
  };

  return (
    <div className="terminal-border bg-card p-4 mb-4 hover:border-accent transition-colors">
      <div 
        className="grid gap-3"
        style={{ 
          gridTemplateRows: 'auto auto',
          gridTemplateColumns: '1fr'
        }}
      >
        {/* Row 1: Task description */}
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
          <div className="mono-text text-xs text-muted-foreground">
            {task.status === "completed" ? "[✓]" : "[ ]"}
          </div>
          <button
            onClick={handleToggleStatus}
            className={`text-left mono-text ${
              task.status === "completed"
                ? "line-through text-muted-foreground"
                : "text-foreground hover:text-primary"
            } transition-colors`}
          >
            <span className="block truncate font-medium">
              {task.status === "completed" ? "TASK_COMPLETED:" : "TASK_ACTIVE:"} {task.title}
            </span>
          </button>
        </div>
        
        {/* Row 2: Priority and actions */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center ml-8">
          <Badge variant={getPriorityVariant(task.priority) as "high" | "medium" | "low" | "default"}>
            {task.priority}
          </Badge>
          <div></div>
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDelete}
          >
            DEL
          </Button>
        </div>
      </div>
    </div>
  );
}