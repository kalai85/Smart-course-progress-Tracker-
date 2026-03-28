// ===================================
// Sample Data for LearnFlow
// ===================================
// 
// This file contains sample course data for testing the application.
// You can use this to populate the app with test data.
//
// HOW TO USE:
// 1. Copy all the code in this file
// 2. Open your browser's Developer Tools (F12)
// 3. Go to the Console tab
// 4. Paste the code and press Enter
// 5. Refresh the page (F5) to see the sample data
//

const sampleCourses = [
  {
    id: 1704067800000,
    name: "React Fundamentals",
    completedLessons: 15,
    totalLessons: 30,
    deadline: "2024-12-31",
    completed: false,
    createdAt: "2024-01-15T10:30:00.000Z"
  },
  {
    id: 1704067900000,
    name: "JavaScript ES6+",
    completedLessons: 28,
    totalLessons: 28,
    deadline: "2024-01-15",
    completed: true,
    createdAt: "2024-01-05T09:15:00.000Z"
  },
  {
    id: 1704068000000,
    name: "Advanced CSS Layout",
    completedLessons: 18,
    totalLessons: 25,
    deadline: "2024-02-28",
    completed: false,
    createdAt: "2024-01-10T14:45:00.000Z"
  },
  {
    id: 1704068100000,
    name: "Node.js Backend Development",
    completedLessons: 0,
    totalLessons: 32,
    deadline: "2024-03-31",
    completed: false,
    createdAt: "2024-01-20T11:00:00.000Z"
  },
  {
    id: 1704068200000,
    name: "Python Data Science",
    completedLessons: 12,
    totalLessons: 20,
    deadline: null,
    completed: false,
    createdAt: "2024-01-18T16:20:00.000Z"
  }
];

// Save to LocalStorage
localStorage.setItem('learnflow_courses', JSON.stringify(sampleCourses));

// Optional: Set dark mode preference
localStorage.setItem('learnflow_darkMode', 'false');

console.log('✅ Sample data loaded successfully!');
console.log('📊 Loaded ' + sampleCourses.length + ' sample courses');
console.log('🔄 Refreshing page...');

// Refresh the page to see the changes
setTimeout(() => {
  window.location.reload();
}, 1000);
