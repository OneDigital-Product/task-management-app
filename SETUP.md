# Task Management App Setup

This is a Next.js task management app using Convex as the database.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Setup Instructions

1. **Clone and install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Set up Convex**:
   ```bash
   npx convex dev
   ```
   
   This will:
   - Create a new Convex project (if needed)
   - Set up your database schema
   - Generate API files
   - Create a `.env.local` file with your Convex URL

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:3000`

## Features

- ✅ Create new tasks with title and priority level
- ✅ Toggle task status (pending/completed) by clicking on tasks
- ✅ Delete individual tasks
- ✅ Clear all completed tasks at once
- ✅ Priority badges with color coding:
  - **High**: Red badge
  - **Medium**: Yellow badge  
  - **Low**: Green badge
- ✅ Completed tasks shown with strikethrough text
- ✅ Real-time updates across all browser tabs
- ✅ Responsive design with Tailwind CSS
- ✅ Clean UI using shadcn/ui components

## Project Structure

```
├── app/
│   ├── page.tsx         # Main app page with Convex provider
│   ├── layout.tsx       # App layout and metadata
│   └── globals.css      # Global styles with CSS variables
├── components/
│   ├── TaskForm.tsx     # Form for adding new tasks
│   ├── TaskItem.tsx     # Individual task display component
│   ├── TaskList.tsx     # List of all tasks
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── convex/
│   ├── schema.ts        # Database schema definition
│   ├── tasks.ts         # Database operations (CRUD)
│   └── _generated/      # Auto-generated Convex API files
└── lib/
    └── utils.ts         # Utility functions for styling
```

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Database**: Convex (real-time serverless database)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Notes

- The app uses Convex for real-time data synchronization
- All tasks are sorted by creation time (newest first)
- Priority levels affect the visual styling of task badges
- The app is fully responsive and works on mobile devices