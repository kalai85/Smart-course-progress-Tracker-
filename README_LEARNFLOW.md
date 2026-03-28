# 📚 LearnFlow - Smart Course Progress Tracker

A modern, interactive React application designed to help learners track their course progress, manage deadlines, and maintain daily learning streaks. Perfect for students who want to organize their self-paced learning journey!

## ✨ Features

### Core Features
- ✅ **Add Courses** - Create courses with custom lesson counts and deadlines
- 📊 **Progress Tracking** - Automatic calculation and display of completion percentage
- ⏱️ **Deadline Management** - Set course deadlines and get smart pace recommendations
- 🎯 **Daily Streak System** - Track consecutive days of learning activity
- 🏆 **Achievement Badges** - Earn badges for completing courses and maintaining streaks
- 💡 **Smart Suggestions** - Get AI-like suggestions based on your progress
- 🌙 **Dark Mode** - Toggle between light and dark theme

### Advanced Features
- 🎨 **Animated Progress Bars** - Smooth, visually appealing progress visualization
- 🔄 **Local Storage** - All data persists in browser without backend
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - UI updates instantly as you complete lessons
- 🛠️ **Course Management** - Edit or delete courses anytime
- 📈 **Smart Pacing** - Calculates lessons needed per day to meet deadlines

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+) and npm installed on your system

### Installation

1. **Navigate to project directory:**
   ```bash
   cd "d:\pro RJS\myapp"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The app will typically open at `http://localhost:5173`
   - Or visit the URL shown in your terminal

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── Header.jsx          # App header with dark mode toggle
│   ├── Dashboard.jsx       # Main dashboard with course list
│   ├── CourseCard.jsx      # Individual course card
│   ├── ProgressBar.jsx     # Animated progress bar
│   ├── AddCourseModal.jsx  # Modal for adding/editing courses
│   ├── DailyStreak.jsx     # Daily streak display
│   ├── AchievementBadges.jsx # Achievement badges display
│   └── SmartSuggestions.jsx # Smart suggestion generator
├── hooks/                   # Custom React hooks
│   └── useLocalStorage.js  # Hook for persistent storage
├── utils/                   # Utility functions
│   └── calculations.js     # Helper functions for calculations
├── styles/                  # CSS stylesheets
│   └── App.css             # Main application styles
├── App.jsx                 # Main app component
├── main.jsx                # Application entry point
└── index.css               # Global styles and CSS reset
```

## 📖 How to Use

### Adding a Course

1. Click the **"➕ Add New Course"** button in the dashboard header
2. Fill in the course details:
   - **Course Name**: Enter the name of your course (e.g., "React Basics")
   - **Total Lessons**: Enter the total number of lessons
   - **Deadline** (Optional): Set when you want to complete the course
3. Click **"Add Course"** to save

### Tracking Progress

1. **Add Lessons**: On each course card, click **"➕ Add Lesson"** to increment progress
2. **View Progress**: The animated progress bar shows completion percentage
3. **Complete Course**: When all lessons are done, click **"🎉 Mark as Complete"**

### Managing Courses

- **Edit**: Click the **✏️** button on any course card to modify it
- **Delete**: Click the **🗑️** button to remove a course
- **Filter**: Use the filter buttons to view "All", "Ongoing", or "Completed" courses

### Exploring Features

- **Daily Streak**: See your current learning streak and motivational messages
- **Achievements**: Earn badges by completing courses and maintaining streaks
- **Smart Suggestions**: Get personalized learning recommendations
- **Dark Mode**: Toggle dark mode using the button in the header

## 🎨 Styling & Customization

### Dark Mode

The app includes built-in dark mode that respects your preference. Click the theme toggle button in the header to switch between light and dark modes. Your preference is saved in LocalStorage!

### Color Scheme (Light Mode)

- **Primary**: Indigo (#6366f1)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Danger**: Red (#ef4444)

### Customizing Colors

Edit the CSS variables in `src/styles/App.css`:

```css
:root {
  --primary-color: #6366f1;  /* Change primary color */
  --success-color: #10b981;  /* Change success color */
  /* ... other colors ... */
}
```

## 💾 Data Storage

All your data is stored in **LocalStorage** - this means:

- ✅ Data persists between browser sessions
- ✅ No backend server needed
- ✅ Complete privacy - data stays on your device
- ⚠️ Clearing browser cache will delete all data

### Exported Data Structure

```javascript
{
  id: 1234567890,
  name: "React Fundamentals",
  completedLessons: 15,
  totalLessons: 30,
  deadline: "2024-12-31",
  completed: false,
  createdAt: "2024-01-15T10:30:00.000Z"
}
```

## 🎯 Sample Data (Optional)

To test the app with sample data, you can manually add it to LocalStorage:

1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Paste this code:

```javascript
// Sample courses
const sampleCourses = [
  {
    id: 1704067800000,
    name: "React Fundamentals",
    completedLessons: 15,
    totalLessons: 30,
    deadline: "2024-12-31",
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 1704067900000,
    name: "JavaScript ES6+",
    completedLessons: 28,
    totalLessons: 28,
    deadline: "2024-01-15",
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 1704068000000,
    name: "Web Design Basics",
    completedLessons: 8,
    totalLessons: 20,
    deadline: "2024-02-28",
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 1704068100000,
    name: "Node.js for Beginners",
    completedLessons: 0,
    totalLessons: 25,
    deadline: null,
    completed: false,
    createdAt: new Date().toISOString()
  }
];

localStorage.setItem('learnflow_courses', JSON.stringify(sampleCourses));
localStorage.setItem('learnflow_darkMode', 'false');

// Refresh to see changes
window.location.reload();
```

4. Press Enter and refresh the page

## 🧠 Understanding the Code

### Hooks and State

**useLocalStorage Hook** - Custom hook for persistent state management
```javascript
const [courses, setCourses] = useLocalStorage('learnflow_courses', []);
```

**Component Props** - Each component receives well-defined props:
```javascript
<CourseCard 
  id={course.id}
  name={course.name}
  completedLessons={course.completedLessons}
  totalLessons={course.totalLessons}
  onIncrement={handleIncrementLesson}
/>
```

### Utility Functions

**calculateProgressPercentage()** - Calculate completion percentage
```javascript
const percentage = calculateProgressPercentage(15, 30); // Returns 50
```

**calculateDaysUntilDeadline()** - Calculate remaining days
```javascript
const daysLeft = calculateDaysUntilDeadline('2024-12-31'); // Returns number
```

**getDailyStreak()** - Track consecutive learning days
```javascript
const streak = getDailyStreak(); // Returns current streak count
```

## 🐛 Troubleshooting

### Data Not Saving
- Check if LocalStorage is enabled in your browser
- Try clearing browser cache and reload

### Styles Not Applying
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

### Modal Not Opening
- Check browser console for JavaScript errors (F12 → Console)
- Ensure JavaScript is enabled

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

This project demonstrates:
- React Hooks (useState, useEffect)
- Functional Components
- Custom Hooks
- LocalStorage API
- CSS Variables and Dark Mode
- Responsive Design with CSS Grid
- Form Validation
- Component Composition

## 💡 Tips for Students

1. **Start Small**: Add one course at a time
2. **Set Realistic Deadlines**: Give yourself enough time
3. **Maintain Your Streak**: Try to learn something every day
4. **Use the Suggestions**: They adapt to your progress
5. **Track Everything**: Even small lessons count!

## 🚀 Future Enhancement Ideas

- Add course categories/tags
- Statistics dashboard with charts
- Weekly/monthly progress reports
- Export data to CSV
- Course recommendations
- Study session timer
- Mobile app version

## 📝 Code Comments

All components and utilities are heavily commented to help 2nd-year students understand the code. Look for:
- JSDoc comments for functions
- Inline comments explaining logic
- Component prop descriptions

## 🤝 Contributing

Feel free to fork this project and add your own features!

## 📄 License

This project is open source and available for educational purposes.

## ✉️ Questions?

Check the in-code comments and documentation. Each component file has detailed explanations!

---

**Happy Learning! 🎉**

Remember: Consistency is key. Keep your streak going and achieve your learning goals! 🚀
