# 🔧 LearnFlow - Troubleshooting & FAQ

## Common Issues & Solutions

---

## 🚨 Installation Issues

### Issue: "npm command not found"

**Problem**: Node.js is not installed or not in PATH

**Solutions**:
1. Download Node.js from https://nodejs.org/
2. Install the LTS version (recommended)
3. Restart your terminal/command prompt
4. Verify: `node --version` and `npm --version`

---

### Issue: "npm install" fails with errors

**Problem**: Network issues or corrupted install

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete old files
rm -rf node_modules package-lock.json

# Try install again
npm install
```

---

### Issue: "EACCES: permission denied"

**Problem**: Permission issues on your system

**Solutions** (Mac/Linux):
```bash
# Try with sudo
sudo npm install

# Or fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

---

## 🚀 Runtime Issues

### Issue: Port 5173 already in use

**Problem**: Another app using the same port

**Solutions**:
```bash
# Use different port
npm run dev -- --port 3000

# Or kill the process using port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5173
kill -9 <PID>
```

---

### Issue: "Cannot find module 'react'"

**Problem**: Dependencies not installed

**Solutions**:
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Verify React is installed
npm list react
```

---

### Issue: "Vite not found"

**Problem**: Vite build tool missing

**Solutions**:
```bash
# Install vite globally
npm install -g vite

# Or reinstall in project
npm install vite@latest
```

---

## 🎨 Styling Issues

### Issue: Styles not showing

**Problem**: CSS not loading

**Solutions**:
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check CSS file exists at `src/styles/App.css`
3. Check App.jsx imports: `import './styles/App.css'`
4. Open DevTools (F12) → Network tab → verify CSS loaded

---

### Issue: Dark mode not working

**Problem**: Dark mode toggle not functioning

**Solutions**:
1. Check localStorage is enabled
2. Verify `useLocalStorage` hook is working
3. Check in DevTools Console:
   ```javascript
   localStorage.getItem('learnflow_darkMode')
   ```
4. Try clearing storage:
   ```javascript
   localStorage.clear()
   window.location.reload()
   ```

---

### Issue: Layout broken on mobile

**Problem**: Responsive design not working

**Solutions**:
1. Use Chrome DevTools mobile view (F12 → Device toolbar)
2. Check if styles include media queries
3. Clear browser cache
4. Try different mobile device size in DevTools

---

## 💾 Data Issues

### Issue: Data not saving

**Problem**: Courses disappearing after refresh

**Solutions**:
1. Check if localStorage is enabled:
   ```javascript
   // In browser console:
   localStorage.setItem('test', 'working');
   localStorage.getItem('test'); // Should return 'working'
   ```
2. In DevTools (F12) → Application → LocalStorage → check keys
3. Make sure not in private/incognito mode (doesn't save)
4. Check if localStorage quota is exceeded

---

### Issue: Old data showing

**Problem**: Stale data not updating

**Solutions**:
```javascript
// Clear all LearnFlow data
localStorage.removeItem('learnflow_courses');
localStorage.removeItem('learnflow_darkMode');
localStorage.removeItem('streakData');

// Then refresh
window.location.reload();
```

---

### Issue: "Can't add courses anymore"

**Problem**: Adding course doesn't work

**Solutions**:
1. Check browser console for errors (F12 → Console)
2. Verify form validation passes:
   - Name: not empty ✓
   - Lessons: number > 0 ✓
   - Deadline: not in past ✓
3. Clear localStorage and try again
4. Try in different browser

---

## 🐛 Component Issues

### Issue: Modal not opening

**Problem**: Add course modal won't show

**Solutions**:
1. Check `isModalOpen` state in DevTools (React tab)
2. Verify button is being clicked: add `console.log` in handler
3. Check no CSS errors hiding the modal
4. Hard refresh page

```javascript
// Debug by adding to AddCourseModal.jsx
console.log('Modal isOpen:', isOpen);
console.log('Modal rendering');
```

---

### Issue: Progress bar not updating

**Problem**: Progress percentage not changing

**Solutions**:
1. Verify `completedLessons` is incrementing
2. Check in DevTools Console:
   ```javascript
   const courses = JSON.parse(localStorage.getItem('learnflow_courses'));
   console.log(courses[0].completedLessons);
   ```
3. Verify math is working: `calculateProgressPercentage(15, 30)` → 50
4. Check CSS for progress bar showing

---

### Issue: Buttons not responding

**Problem**: Click handlers not working

**Solutions**:
1. Check browser console for errors (F12)
2. Verify onClick is spelled correctly
3. Check callback functions exist
4. Try refreshing page
5. Clear browser cache

---

## 🔒 Security & Privacy

### Issue: Data visible to others

**Problem**: Concerned about privacy

**Solutions**:
- Data is only in YOUR browser's LocalStorage
- Not sent anywhere
- Nobody else can see it unless they access your computer
- If using shared computer, use private/incognito mode
- Clear data before sharing computer

---

### Issue: Need to clear all data

**Problem**: Want fresh start

**Solutions**:
```javascript
// In browser console (F12):
localStorage.clear();
location.reload();

// Or manually delete:
localStorage.removeItem('learnflow_courses');
localStorage.removeItem('learnflow_darkMode');
localStorage.removeItem('streakData');
```

---

## 📱 Browser-Specific Issues

### Chrome

**Black screen?**
- Hard refresh (Ctrl+Shift+R)
- Clear cache and cookies
- Update Chrome

**DevTools not showing?**
- Press F12
- Or right-click → Inspect

---

### Firefox

**Styles broken?**
- Update Firefox
- Hard refresh (Ctrl+Shift+R)

**LocalStorage not working?**
- Check privacy mode is OFF
- Settings → Privacy → Cookies enabled

---

### Safari (Mac)

**Page blank?**
- Cmd+Shift+R (hard refresh)
- Cmd+Alt+R (empty cache)

**LocalStorage issues?**
- Preferences → Privacy → Allow all cookies

---

### Edge

**Similar to Chrome - use same solutions**

---

## 🎓 Common Beginner Mistakes

### Mistake 1: Forgot npm install

**Problem**: "Cannot find module" errors

**Solution**:
```bash
npm install
```

---

### Mistake 2: Editing wrong file

**Problem**: "I changed code but nothing happened"

**Solutions**:
- Make sure you edited `src/App.jsx` not `App.css`
- Check file is saved (Ctrl+S)
- Hard refresh browser
- Check file path is correct

---

### Mistake 3: Using old browser

**Problem**: "Features not working"

**Solutions**:
- Update your browser to latest version
- Use Chrome or Firefox (most compatible)
- Check if feature is supported in your browser

---

### Mistake 4: Private/Incognito mode

**Problem**: "Data doesn't save"

**Solutions**:
- LocalStorage doesn't work in private mode
- Use normal browsing mode
- Enable cookies in settings

---

## ✅ Verification Checklist

### Before saying it's broken:

- [ ] Did you run `npm install`?
- [ ] Did you run `npm run dev`?
- [ ] Are you visiting the correct URL?
- [ ] Did you hard refresh (Ctrl+Shift+R)?
- [ ] Did you check the console for errors (F12)?
- [ ] Is JavaScript enabled in browser?
- [ ] Are you not in private/incognito mode?
- [ ] Is LocalStorage enabled?
- [ ] Have you tried waiting 10 seconds?

---

## 🔍 How to Debug

### Step 1: Open DevTools (F12)

**Tabs to check:**
- **Console**: JavaScript errors
- **Network**: Loading issues
- **Sources**: Set breakpoints
- **Application**: LocalStorage data
- **React DevTools** (if installed): Component state

### Step 2: Check Console for Errors

```javascript
// Look for red X errors
// Read the error message carefully
// Google the error if unsure
```

### Step 3: View LocalStorage

1. DevTools → Application tab
2. Left sidebar → LocalStorage
3. Select your website
4. See all stored data

### Step 4: Test JavaScript Manually

```javascript
// In Console, try these:

// Check if React loads
console.log(typeof React);

// Check localStorage
console.log(localStorage.getItem('learnflow_courses'));

// Test calculations
const calculateProgressPercentage = (c, t) => Math.round((c/t)*100);
console.log(calculateProgressPercentage(15, 30)); // Should be 50
```

---

## 📞 Still Having Issues?

### Helpful Info to Gather

When asking for help, provide:
1. Exact error message from console
2. What you were trying to do
3. Browser and version
4. Operating system
5. Steps to reproduce the problem

### Where to Get Help

1. **Check CODE_WALKTHROUGH.md** - Explains how code works
2. **Read in-code comments** - Most functions explained
3. **Google the error** - Most issues are common
4. **Check React docs** - https://react.dev
5. **MDN JavaScript** - https://developer.mozilla.org

---

## 🎯 Performance Issues

### App running slow?

**Solutions**:
```bash
# Clear browser cache
# Try different browser
# Check for open DevTools (slows things down)
# Restart development server:
npm run dev
```

---

### Memory leaks?

**Check for:**
- Unclosed WebSockets
- Event listeners not removed
- Circular references

**Most common**: None in this app! It's optimized ✅

---

## 🚀 Advanced Debugging

### React DevTools Extension

Install: https://react-devtools-tutorial.vercel.app/

**Allows you to:**
- See component tree
- View props and state
- Trigger re-renders
- Performance profiling

### Browser DevTools Tricks

```javascript
// Get all data
localStorage;

// Watch a course update
setInterval(() => {
  console.log(JSON.parse(localStorage.getItem('learnflow_courses')));
}, 1000);

// Test component
import App from './App';
// ... etc
```

---

## 📝 Reporting Issues

Found a bug? Create clear report:

**Title**: Short description
```
Dark mode toggle not saving preference
```

**Description**: What happened
```
I clicked the dark mode button, the app changed to dark mode,
but after refreshing the page, it was back to light mode.
```

**Steps to Reproduce**:
1. Click dark mode button
2. Refresh page (F5)
3. Notice light mode is active

**Expected**: Dark mode stays enabled

**Actual**: Dark mode reverts to light mode

---

## ✨ Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| Styles broken | Ctrl+Shift+R |
| Data gone | Load sample data |
| Can't install | `npm cache clean --force` |
| Port busy | `npm run dev -- --port 3000` |
| Private mode | Switch to normal browsing |
| LocalStorage error | Check quota not exceeded |
| Old data | `localStorage.clear()` |

---

## 🎓 Learning from Errors

**Don't hide errors - learn from them!**

When you see an error:
1. Read it carefully
2. Understand what it means
3. Google if unsure
4. Try to fix it
5. Learn for next time

This is how real developers work! 💪

---

## 📞 Still Stuck?

1. ✅ Read this entire troubleshooting guide
2. ✅ Check CODE_WALKTHROUGH.md
3. ✅ Read in-code comments
4. ✅ Google the exact error message
5. ✅ Check React & MDN docs
6. ✅ Try asking in React community

---

## 🎉 You Got This!

Most issues are solvable by:
- Hard refresh
- Clearing cache
- Restarting dev server
- Reading error messages carefully

**Happy debugging! 🔍**

---

*Remember: Every error is a learning opportunity!*
