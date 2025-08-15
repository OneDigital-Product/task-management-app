"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { TaskItem } from "./TaskItem";
import { Button } from "@/components/ui/button";

export function TaskList() {
  const tasks = useQuery(api.tasks.list);
  const removeCompleted = useMutation(api.tasks.removeCompleted);

  const handleRemoveCompleted = async () => {
    try {
      const removedCount = await removeCompleted();
      console.log(`Removed ${removedCount} completed tasks`);
    } catch (error) {
      console.error("Failed to remove completed tasks:", error);
    }
  };

  if (tasks === undefined) {
    return (
      <div className="terminal-border bg-card p-6">
        <div className="mono-text text-center text-muted-foreground">
          &gt; Initializing task database...
          <span className="cursor"></span>
        </div>
      </div>
    );
  }

  const completedTasks = tasks.filter((task) => task.status === "completed");
  const pendingTasks = tasks.filter((task) => task.status === "pending");

  return (
    <div className="w-full">
      <div className="terminal-border bg-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="mono-text text-sm text-muted-foreground mb-1">
              &gt; System status overview
            </div>
            <h3 className="chunky-text text-2xl text-primary">
              ACTIVE_PROCESSES ({tasks.length})
            </h3>
          </div>
          {completedTasks.length > 0 && (
            <Button
              variant="terminal"
              onClick={handleRemoveCompleted}
              size="sm"
            >
              PURGE_COMPLETED ({completedTasks.length})
            </Button>
          )}
        </div>

        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="mono-text text-muted-foreground mb-4">
              &gt; No active processes detected
            </div>
            <div className="mono-text text-sm text-muted-foreground">
              Initialize new task to begin operations...
            </div>
          </div>
        ) : (
          <div className="space-y-0">
            {pendingTasks.length > 0 && (
              <div className="mb-6">
                <div className="mono-text text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                  {/* ACTIVE_TASKS */}
                  &gt;&gt; ACTIVE_TASKS
                </div>
                {pendingTasks.map((task) => (
                  <TaskItem key={task._id} task={task} />
                ))}
              </div>
            )}
            {completedTasks.length > 0 && (
              <div>
                <div className="mono-text text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                  {/* COMPLETED_PROCESSES */}
                  &gt;&gt; COMPLETED_PROCESSES
                </div>
                {completedTasks.map((task) => (
                  <TaskItem key={task._id} task={task} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}