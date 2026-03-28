# 🔧 Installation & Setup Guide

## Complete Step-by-Step Installation

This guide covers everything you need to install and run LearnFlow.

---

## ✅ Prerequisites Check

### What You Need
- Windows 10/11 or Mac or Linux
- Internet connection
- 500 MB disk space
- Administrator access (for first-time npm setup)

### Verify You Have Node.js

Open Command Prompt (PowerShell or CMD) and type:
```bash
node --version
```

If you see a version number (e.g., v22.19.0), jump to **Step 1**.

If you get "command not found", install it first:
→ **Go to: Install Node.js (Below)**

---

## 📦 Install Node.js

### Windows

1. Visit https://nodejs.org/
2. Click **LTS** button (recommended)
3. Download and run the installer
4. Follow the wizard (keep defaults)
5. Restart your computer
6. Verify: Open PowerShell/CMD and type `node --version`

### Mac

**Using Homebrew (recommended)**:
```bash
brew install node
```

**Or download**:
- Visit https://nodejs.org/
- Download Mac version
- Run installer

### Linux

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd "d:\pro RJS\myapp"
```

Or if above doesn't work:
```bash
cd d:
cd "pro RJS"
cd myapp
```

### Step 2: Install Dependencies

**Option A: Using npm**
```bash
npm install
```

**Option B: If npm has permission issues (Windows)**
```bash
# Run PowerShell as Administrator, then:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install
```

**Option C: Using Node Package Manager directly**
```bash
node C:\Program Files\nodejs\npm\bin\npm-cli.js install
```

⏳ **Wait**: This takes 2-5 minutes. You'll see many messages - this is normal!

### Step 3: Verify Installation

```bash
npm --version
```

Should show version number (e.g., 10.7.0)

---

## ▶️ Running the Project

### Start the Development Server

```bash
npm run dev
```

### What You Should See

```
  VITE v5.1.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Open in Browser

1. Copy the URL: `http://localhost:5173/`
2. Paste in browser
3. **LearnFlow** should load! 🎉

---

## 🎯 Common Installation Issues

### Issue: "npm: command not found"

**Cause**: npm not installed or not in PATH

**Fix**:
1. Install Node.js from nodejs.org
2. Restart terminal/computer
3. Try again

---

### Issue: "PowerShell execution policy"

**Cause**: Windows security policy blocking scripts

**Fix Option 1** (Temporary - just this session):
```bash
powershell -ExecutionPolicy Bypass -Command "npm install"
```

**Fix Option 2** (Permanent - for your account):
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Type: `Y` and press Enter
4. Restart terminal
5. Try `npm install` again

**Fix Option 3** (Use Command Prompt instead):
1. Press Windows Key
2. Type: `cmd`
3. In Command Prompt: `cd d:\pro RJS\myapp`
4. Then: `npm install`

---

### Issue: "EACCES: permission denied"

**Cause**: Permissions issue on Mac/Linux

**Fix**:
```bash
# Option 1: Use sudo
sudo npm install

# Option 2: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Then try npm install again
npm install
```

---

### Issue: "npm ERR! code ERESOLVE"

**Cause**: Dependency conflict

**Fix**:
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Or on Windows:
rmdir /s /q node_modules
del package-lock.json

# Try again
npm install
```

---

### Issue: "Port 5173 already in use"

**Cause**: Another app using the same port

**Fix Option 1** (Use different port):
```bash
npm run dev -- --port 3000
# Then visit http://localhost:3000
```

**Fix Option 2** (Kill the process using port 5173):

**Windows PowerShell**:
```powershell
# Find process
netstat -ano | findstr :5173

# Kill process (replace XXXX with PID)
taskkill /PID XXXX /F
```

**Mac/Linux**:
```bash
lsof -i :5173
kill -9 <PID>
```

---

### Issue: "Dependencies failed to install"

**Cause**: Network issue or corrupted cache

**Fix**:
```bash
# Clear cache
npm cache clean --force

# Clean install
rm -rf node_modules package-lock.json

# Install with specific registry
npm install --registry https://registry.npmjs.org/
```

---

## 🔍 Verify Installation

### Check All Files Exist

```bash
# You should see these files/folders:
ls src/components/
ls src/hooks/
ls src/utils/
ls src/styles/
ls src/App.jsx
```

### Verify Key Dependencies

```bash
npm list react
npm list react-dom
npm list vite
```

All should show version numbers.

---

## 🚀 First Run

### Terminal Steps

1. Open terminal/PowerShell
2. Navigate to project:
   ```bash
   cd "d:\pro RJS\myapp"
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Wait for: `ready in XXX ms`

### Browser Steps

1. See URL in terminal (usually `http://localhost:5173`)
2. Click or copy-paste to browser
3. See **LearnFlow** app load
4. If not, hard refresh (Ctrl+Shift+R)

### First Steps in App

1. Click **"➕ Add New Course"**
2. Fill form:
   - Name: "React Basics"
   - Lessons: "30"
   - Deadline: Leave empty or set future date
3. Click **"Add Course"**
4. Click **"➕ Add Lesson"** to track progress
5. See progress bar fill up! 🎉

---

## 📦 Project Dependencies

### What Gets Installed

```json
{
  "dependencies": {
    "react": "^18.x.x",          // Core React
    "react-dom": "^18.x.x"       // React for DOM
  },
  "devDependencies": {
    "vite": "^5.x.x"             // Build tool
    // ... other dev tools
  }
}
```

Total size after install: ~500 MB (node_modules)

---

## 🌐 Network Requirements

### First Install
- **Internet**: Required (downloads ~500 MB)
- **Time**: 2-5 minutes
- **Data**: ~500 MB

### Subsequent Runs
- **Internet**: Optional (everything cached)
- **Time**: Instant startup
- **Data**: None

---

## 🔄 Updating Dependencies

### Check for Updates

```bash
npm outdated
```

Shows available updates.

### Update All

```bash
npm update
```

⚠️ Only run after app is working!

---

## 🗑️ Uninstall / Clean

### Remove Dependencies

```bash
rm -rf node_modules
rm package-lock.json
```

### Reinstall Fresh

```bash
npm install
```

---

## 📝 npm Commands Reference

| Command | What it Does |
|---------|------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create optimized build |
| `npm run preview` | Preview production version |
| `npm list` | List installed packages |
| `npm outdated` | Check for updates |
| `npm cache clean` | Clear npm cache |
| `npm uninstall <pkg>` | Remove a package |

---

## 💾 Where Everything Installs

```
d:\pro RJS\myapp/
├── node_modules/          ← All packages installed here (~500 MB)
├── package.json           ← List of what to install
└── package-lock.json      ← Exact versions that were installed
```

**Don't edit these files!** They're auto-managed by npm.

---

## 🖥️ System Requirements

### Minimum
- **OS**: Windows 10, Mac Sierra, Ubuntu 16.04+
- **RAM**: 2 GB
- **Storage**: 1 GB free
- **Browser**: Any modern browser

### Recommended
- **OS**: Windows 11, Mac Big Sur+, Ubuntu 20.04+
- **RAM**: 4 GB+
- **Storage**: 2 GB free
- **Browser**: Chrome, Firefox, Safari (latest)

---

## 🆘 Still Having Issues?

### Check This Checklist

- [ ] Node.js installed? (`node --version` works)
- [ ] In correct directory? (`cd "d:\pro RJS\myapp"`)
- [ ] `npm install` completed without errors?
- [ ] `npm run dev` shows "ready in XXX ms"?
- [ ] Browser opens to http://localhost:5173?

### Troubleshooting Steps

1. **Hard restart everything**:
   - Close terminal
   - Close browser
   - Reopen terminal
   - Run `npm run dev` again

2. **Check for errors**:
   - Read terminal output carefully
   - Search error in TROUBLESHOOTING.md
   - Google the error message

3. **Nuclear option** (last resort):
   ```bash
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   npm run dev
   ```

---

## ✅ Installation Complete!

Once you see this in terminal:
```
➜  Local:   http://localhost:5173/
```

**You're all set! 🎉**

Open the browser link and start using LearnFlow!

---

## 📚 Next Steps

1. Open app at `http://localhost:5173/`
2. Read **QUICK_START.md** for first steps
3. Read **README_LEARNFLOW.md** for all features
4. Read **CODE_WALKTHROUGH.md** to understand code

---

## 💡 Pro Tips

### Tip 1: Keep Terminal Open
Leave the `npm run dev` terminal window open while developing.

### Tip 2: Hot Reload
When you edit code, the app automatically reloads in browser!

### Tip 3: Dev Tools
Press `F12` to open browser DevTools for debugging.

### Tip 4: Save Often
Press `Ctrl+S` to save files while coding.

---

## 🎓 Learning Resource

This installation process teaches you:
- Command line basics
- npm package manager
- Build tools (Vite)
- Local development server
- Development workflow

**This is real development! 💻**

---

## 📞 Still Stuck?

1. Check **TROUBLESHOOTING.md** for your specific issue
2. Google exact error message
3. Check Node.js/npm official docs
4. Ask on React/Node.js communities

---

**You've got this! Happy coding! 🚀**

*Any questions? Check TROUBLESHOOTING.md or QUICK_START.md*
