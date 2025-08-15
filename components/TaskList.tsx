"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { TaskItem } from "./TaskItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">Loading tasks...</p>
        </CardContent>
      </Card>
    );
  }

  const completedTasks = tasks.filter((task) => task.status === "completed");
  const pendingTasks = tasks.filter((task) => task.status === "pending");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Tasks ({tasks.length})</CardTitle>
            {completedTasks.length > 0 && (
              <Button
                variant="outline"
                onClick={handleRemoveCompleted}
                className="text-sm"
              >
                Clear Completed ({completedTasks.length})
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {tasks.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No tasks yet. Add one above to get started!
            </p>
          ) : (
            <div className="space-y-0">
              {pendingTasks.map((task) => (
                <TaskItem key={task._id} task={task} />
              ))}
              {completedTasks.map((task) => (
                <TaskItem key={task._id} task={task} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}