"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");
  const createTask = useMutation(api.tasks.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await createTask({ title: title.trim(), priority });
      setTitle("");
      setPriority("medium");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="terminal-border bg-card p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full">
            <label className="mono-text text-sm text-foreground block mb-2">
              TASK_DESCRIPTION:
            </label>
            <Input
              type="text"
              placeholder="Enter task objectives..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="mono-text text-sm text-foreground block mb-2">
                PRIORITY_LEVEL:
              </label>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value as "high" | "medium" | "low")}
              >
                <option value="high">HIGH: Critical System Operations</option>
                <option value="medium">MEDIUM: Standard Operations</option>
                <option value="low">LOW: Background Processes</option>
              </Select>
            </div>
            <Button type="submit" size="lg">
              &gt;&gt; EXECUTE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}