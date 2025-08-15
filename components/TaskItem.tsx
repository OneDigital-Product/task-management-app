"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
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
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={handleToggleStatus}
              className={`text-left flex-1 min-w-0 ${
                task.status === "completed"
                  ? "line-through text-muted-foreground"
                  : ""
              }`}
            >
              <span className="block truncate">{task.title}</span>
            </button>
            <Badge variant={getPriorityVariant(task.priority) as "high" | "medium" | "low" | "default"}>
              {task.priority}
            </Badge>
          </div>
          <Button
            variant="destructive"
            size="icon"
            onClick={handleDelete}
            className="flex-shrink-0"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}