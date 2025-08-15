## From Excel to Web Development - 3 Hour Workshop

---

## **Hour 1: Foundations (60 minutes)**

### **Part 1: Web Development Basics - The Excel Analogy (20 min)**

#### Core Concepts Translation:
- **Excel Worksheet = Frontend (React/Next.js)**
  - What users see and interact with
  - Like your Excel forms and buttons
  - Handles user input and displays data

- **Excel Formulas = Backend Logic**
  - Processes data and calculations
  - Like VLOOKUP, SUMIF, pivot tables
  - Returns results to display

- **Excel Data Tables = Database (Convex)**
  - Stores all your information
  - Like Excel sheets with raw data
  - Can be queried and updated

#### CRUD Operations Comparison:
| Excel Action | Web Development | What It Does |
|-------------|-----------------|--------------|
| Add new row | CREATE (POST) | Add new record |
| View/Filter data | READ (GET) | Fetch and display |
| Edit cell value | UPDATE (PUT) | Modify existing |
| Delete row | DELETE (DELETE) | Remove record |

### **Part 2: GitHub Concepts - Team Collaboration (20 min)**

#### The Shared Excel Problem:
"Remember when multiple people edit the same Excel file? Version conflicts, lost changes, 'Final_v2_REAL_FINAL.xlsx'?"

#### GitHub Solutions:
- **Repository** = Master Excel file in the cloud
- **Branch** = Your personal copy to work on
- **Commit** = Save your changes with notes
- **Pull Request** = "Hey team, review my changes"
- **Merge** = Combine approved changes back

#### Why Branching Matters:
1. Work without breaking others' code
2. Test features in isolation
3. Easy rollback if something goes wrong
4. Clear review process

### **Part 3: Our Training App Overview (20 min)**

#### App Concept: "Team Task Tracker"
A simple task management system (like a shared Excel task list)

**Features:**
- Add tasks (CREATE)
- View all tasks (READ)
- Edit task status (UPDATE)
- Delete completed tasks (DELETE)

#### Project Structure Walkthrough:
```
my-task-app/
├── app/                  # Your pages (like Excel sheets)
│   ├── page.tsx         # Home page
│   └── layout.tsx       # Template for all pages
├── components/          # Reusable parts (like Excel macros)
│   └── TaskList.tsx    # Display tasks
├── convex/             # Database logic (like Excel data connections)
│   ├── schema.ts       # Define data structure
│   └── tasks.ts        # Database operations
├── public/             # Images, files
└── package.json        # Project settings (like Excel options)
```

---

## **Hour 2: Hands-On Development (60 minutes)**

### **Part 4: Building the Base App (30 min)**

#### Step 1: Create the App Using AI
Use the prompt provided below to generate the initial code with Claude/ChatGPT

**Note:** The base app already includes priority color coding (like Excel conditional formatting) so it looks polished from the start!

#### Step 2: Understanding Key Files

**convex/schema.ts** - Define your data (like Excel column headers):
```typescript
// This is like defining columns in Excel
schema: {
  tasks: {
    title: "Task Name",
    status: "pending/completed",
    priority: "high/medium/low",
    createdAt: "timestamp"
  }
}
```

**app/page.tsx** - Main page (like your Excel dashboard):
```typescript
// This displays your data, like an Excel report
return (
  <div>
    <TaskList />  // Shows all tasks
    <AddTaskForm />  // Form to add new tasks
  </div>
)
```

#### Step 3: CRUD Walkthrough
1. **CREATE**: Adding a task through the form
2. **READ**: Displaying tasks in a list
3. **UPDATE**: Clicking to change status
4. **DELETE**: Removing completed tasks

### **Part 5: First Feature - Branching & PR (30 min)**

#### Creating Your First Branch:
```bash
# Create a new branch for your feature
git checkout -b feature/add-priority-colors

# Make your changes (AI will help generate code)
# Test locally

# Save your changes
git add .
git commit -m "Add color coding for task priorities"

# Push to GitHub
git push origin feature/add-priority-colors
```

#### Creating a Pull Request:
1. Go to GitHub repository
2. Click "Compare & pull request"
3. Add description of changes
4. Request review from teammate
5. Merge after approval

**Feature 1: Due Dates & Smart Filtering**
- Add due dates to tasks
- Visual warnings for overdue items (like Excel date formatting)
- Filter by status/overdue (like Excel AutoFilter)
- Sort by date/priority (like Excel sort)
- Real-time updates as data changes

---

## **Hour 3: Advanced Features & Practice (60 minutes)**

### **Part 6: Second Feature with Data Visualization (40 min)**

#### Feature 2: Task Analytics Dashboard

**What We'll Build:**
- Chart showing tasks by status
- Chart showing tasks by priority
- Summary statistics
- (Like Excel pivot charts!)

#### Process:
1. Create new branch: `feature/analytics-dashboard`
2. Use AI to generate chart component
3. Integrate with existing data
4. Test the visualization
5. Create pull request
6. Review and merge

#### Key Learning Points:
- Using chart libraries (like Excel chart wizard)
- Aggregating data (like COUNTIF in Excel)
- Real-time updates when data changes

### **Part 7: Review & Best Practices (20 min)**

#### GitHub Workflow Summary:
1. **Always** create a branch for new features
2. **Write** clear commit messages
3. **Test** before creating PR
4. **Review** others' code thoughtfully
5. **Merge** only after approval

#### AI Coding Tips:
- Be specific in prompts
- Review generated code
- Test incrementally
- Ask for explanations

#### From Excel Expert to Developer:
- You already understand data and logic
- Web development adds collaboration and scale
- GitHub prevents version chaos
- AI accelerates development

---

## **Prompts for AI Code Generation**

### **Initial App Prompt:**
```
Create a simple task management app using Next.js 14, React, and Convex database.

Requirements:
1. Basic CRUD operations for tasks
2. Each task should have: title (string), status (pending/completed), priority (high/medium/low), createdAt (timestamp)
3. Simple, clean UI with Tailwind CSS
4. Display tasks in a list with ability to:
   - Add new task via form
   - Toggle task status by clicking
   - Delete completed tasks
   - Show priority as a badge with color coding:
     * High priority: red badge/styling
     * Medium priority: yellow badge/styling
     * Low priority: green badge/styling
5. Tasks should be visually distinct based on status (completed tasks greyed out/strikethrough)

Keep it simple and well-commented for developers transitioning from Excel/VBA background.
Include setup instructions for Convex.
```

### **Feature 1 Prompt - Due Dates & Filtering:**
```
Add due date functionality to the task tracker:

Requirements:
1. Add a dueDate field to tasks (optional date)
2. Show due date in the task list
3. Add visual indicators:
   - Overdue tasks: Red text/icon for dates in the past
   - Due today: Orange warning indicator
   - Upcoming: Normal display
4. Add filter buttons above the task list:
   - All tasks
   - Pending only
   - Completed only
   - Overdue only
5. Add sort options:
   - By due date (earliest first)
   - By priority (high to low)
   - By created date (newest first)

This is similar to Excel's AutoFilter and conditional formatting for dates.
Make sure filtering and sorting happen in real-time.
```

### **Feature 2 Prompt - Analytics Dashboard:**
```
Create an analytics dashboard component that shows:
1. A bar chart of tasks grouped by status (pending vs completed)
2. A pie chart showing distribution of tasks by priority
3. Summary cards showing:
   - Total tasks
   - Completed percentage
   - Most common priority

Use Recharts library for charts (similar to Excel charts).
Make it responsive and place it above the task list.
Include real-time updates when tasks change.
```

---

## **Training Materials Checklist**

### Before Training:
- [ ] Set up GitHub repository
- [ ] Ensure all participants have GitHub accounts
- [ ] Install Node.js and VS Code on all machines
- [ ] Create Convex account for the project
- [ ] Test the base app generation

### During Training:
- [ ] Screen sharing setup
- [ ] Breakout rooms for pair programming
- [ ] Backup slides for concepts
- [ ] Reference sheet for Git commands
- [ ] Excel-to-Web translation guide printed

### After Training:
- [ ] Share recording
- [ ] Provide additional resources
- [ ] Set up follow-up session
- [ ] Create team Slack/Teams channel for questions

---

## **Time Management Guide**

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 | Welcome & Setup Check | 5 min |
| 0:05 | Excel to Web Concepts | 20 min |
| 0:25 | GitHub Basics | 20 min |
| 0:45 | App Structure Tour | 15 min |
| 1:00 | **Break** | 10 min |
| 1:10 | Build Base App | 30 min |
| 1:40 | Feature 1 - Branching | 30 min |
| 2:10 | **Break** | 10 min |
| 2:20 | Feature 2 - Charts | 35 min |
| 2:55 | Wrap-up & Q&A | 5 min |

---

## **Success Metrics**

By the end of this training, participants should be able to:
- ✅ Understand how web apps relate to Excel workflows
- ✅ Create and merge a GitHub branch
- ✅ Use AI to generate code for features
- ✅ Understand basic CRUD operations
- ✅ Collaborate on code using pull requests
- ✅ Feel confident to start their first web project

---

## **Additional Resources**

- **GitHub Learning Lab**: https://lab.github.com/
- **Next.js Tutorial**: https://nextjs.org/learn
- **Convex Quickstart**: https://docs.convex.dev/quickstart
- **From Excel to Python/JS**: Recommended transition guides
- **AI Prompting Best Practices**: Documentation links

---

## **Appendix: Take-Home Feature Exercises**

*These progressive challenges are for continued learning after the training. Each teaches different aspects of web development while maintaining Excel analogies.*

### **Learning Paths**

#### **Beginners Path:**
1. Start with Search & Export (Exercise A)
2. Move to Tags & Categories (Exercise F)
3. Try Comments (Exercise C)

#### **Intermediate Path:**
1. Start with Task Assignment (Exercise B)
2. Add Bulk Operations (Exercise D)
3. Combine with Templates (Exercise E)

#### **Advanced Path:**
1. Implement Bulk Operations with Keyboard Shortcuts (Exercise D)
2. Add Templates & Recurring Tasks (Exercise E)
3. Create a custom feature they design themselves

### **Exercise A: Search & Export (Beginner-Friendly)**

**Prompt:**
```
Add search and export functionality to the task tracker:

Requirements:
1. Add a search bar above the task list
2. Search should filter tasks in real-time as user types
3. Search through both title and priority fields
4. Highlight matching text in results (optional)
5. Add an "Export to CSV" button that:
   - Downloads all visible (filtered) tasks
   - Includes all fields: title, status, priority, due date
   - Names file with current date: tasks_2025_01_15.csv
6. Show count of filtered results: "Showing 5 of 12 tasks"

This mimics Excel's Ctrl+F search and export functionality.
Users should be able to open the CSV directly in Excel.
```

**Skills Learned:** Text searching, file generation, data export

### **Exercise B: Task Assignment & Team Features (Intermediate)**

**Prompt:**
```
Add team collaboration features to the task tracker:

Requirements:
1. Add an "assignedTo" field to tasks
2. Create a predefined list of team members:
   - Store as: { id, name, email, avatar/initials }
3. Show assigned person in task list with:
   - Initials in a colored circle (like Excel comments show initials)
   - Full name on hover
4. Add filter buttons for:
   - My tasks (hardcode current user for now)
   - Unassigned tasks
   - Tasks by specific team member
5. In the add task form:
   - Dropdown to select assignee
   - Option for "Unassigned"
6. Add bulk assign feature:
   - Checkboxes to select multiple tasks
   - Dropdown to assign all selected to one person

This is like adding an "Owner" column in Excel with data validation dropdown.
```

**Skills Learned:** Relational data, dropdown components, bulk updates

### **Exercise C: Comments & Activity History (Intermediate)**

**Prompt:**
```
Add commenting and activity tracking to tasks:

Requirements:
1. Add a comment icon/button on each task
2. Clicking opens a comment modal/section showing:
   - Existing comments with timestamp and author
   - Text input to add new comment
3. Store comments as an array within each task
4. Add activity log that tracks:
   - When task was created
   - Status changes (pending → completed)
   - Priority changes
   - New comments added
5. Show comment count badge on tasks
6. Add "Recent Activity" sidebar showing last 10 actions across all tasks

This is similar to Excel's cell comments and Track Changes feature.
Include relative timestamps (e.g., "2 hours ago", "yesterday").
```

**Skills Learned:** Nested data structures, timestamps, array operations, modals

### **Exercise D: Bulk Operations & Keyboard Shortcuts (Advanced)**

**Prompt:**
```
Add Excel-like bulk operations and keyboard navigation:

Requirements:
1. Add checkbox column to select multiple tasks
2. "Select All" checkbox in header
3. Bulk action toolbar appears when items selected:
   - Mark as Complete
   - Delete Selected
   - Change Priority (dropdown)
   - Change Assignee (if assignment feature exists)
4. Show "3 tasks selected" counter
5. Add keyboard shortcuts:
   - Ctrl/Cmd + A: Select all
   - Delete key: Delete selected
   - Escape: Clear selection
   - Arrow keys: Navigate between tasks
   - Space: Toggle task complete
6. Add undo functionality for bulk operations
   - Show toast: "5 tasks deleted - Undo?"
   - 5-second window to undo

This mimics Excel's row selection and bulk operations.
```

**Skills Learned:** State arrays, keyboard event handling, undo patterns, batch operations

### **Exercise E: Templates & Recurring Tasks (Advanced)**

**Prompt:**
```
Add task templates and recurring task functionality:

Requirements:
1. Add "Save as Template" option for tasks
2. Template includes: title, priority, assignee (not status/dates)
3. Create dropdown of saved templates in add task form
4. Add "recurring" option with patterns:
   - Daily
   - Weekly (pick days)
   - Monthly (pick date)
   - Custom interval (every X days)
5. When a recurring task is completed:
   - Create next occurrence automatically
   - Link to previous occurrence
6. Show recurring icon/badge on recurring tasks
7. "View Series" option to see all related recurring tasks

This is like Excel's fill series and template features.
```

**Skills Learned:** Complex data relationships, date calculations, template patterns

### **Exercise F: Tags & Categories (Intermediate)**

**Prompt:**
```
Add tagging system for better organization:

Requirements:
1. Add tags field to tasks (array of strings)
2. Create tag input with:
   - Type to add new tag
   - Autocomplete from existing tags
   - Color-coded tag chips
   - Click X to remove tag
3. Show tags as colored badges in task list
4. Add tag filter sidebar:
   - List all unique tags with count
   - Click to filter by tag
   - Multi-select for OR filtering
5. Add "Quick Add" buttons for common tag combinations:
   - "Urgent + Review"
   - "Project A + Development"
6. Tag analytics: Show most used tags

This is like Excel's categories and multi-select filters.
```

**Skills Learned:** Array manipulation, autocomplete, multi-select filtering, data aggregation

### **Tips for Self-Learning:**

1. **Use AI extensively** - Each prompt is designed to work with Claude/ChatGPT
2. **Commit after each small success** - Don't wait until everything works
3. **Create a new branch for each exercise** - Practice the Git workflow
4. **Share solutions** - Set up a team repo where everyone can see different approaches
5. **Pair up** - Two Excel experts learning together is powerful
6. **Test incrementally** - Build one requirement at a time
7. **Ask AI to explain** - Don't just copy code, understand it

### **Skill Progression Matrix**

| Exercise | Difficulty | Key Skills | Excel Equivalent |
|----------|-----------|------------|------------------|
| A: Search & Export | ⭐ | Search, Export | Ctrl+F, Save As CSV |
| F: Tags | ⭐⭐ | Arrays, Filters | Categories, AutoFilter |
| B: Assignment | ⭐⭐ | Relationships | Data Validation |
| C: Comments | ⭐⭐ | Nested Data | Cell Comments |
| D: Bulk Ops | ⭐⭐⭐ | State Management | Multi-select |
| E: Templates | ⭐⭐⭐ | Complex Logic | Fill Series |

### **Success Metrics for Each Exercise**

✅ **You've succeeded when:**
- Your code works without errors
- Another team member can use your feature
- You can explain what each part does
- You've created a PR and merged it
- You could build something similar without the AI prompt
