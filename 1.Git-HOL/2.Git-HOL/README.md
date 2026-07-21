<div align="center">

# 🚀 Git Ignore Hands-On Lab

### Ignoring Unwanted Files and Folders Using `.gitignore`

</div>

---

## 📖 Overview

This lab demonstrates how Git's `.gitignore` file can be used to exclude unwanted files and directories from version control. Ignoring unnecessary files helps maintain a clean repository and prevents temporary, generated, and log files from being committed.

---

## 🎯 Objectives

✅ Understand the purpose of `.gitignore`

✅ Learn how to ignore unwanted files

✅ Learn how to ignore folders from Git tracking

✅ Verify ignored files using Git status

---

## 🛠️ Technologies Used

| Tool | Purpose |
|--------|---------|
| Git | Version Control |
| PowerShell | Command Execution |
| Notepad++ | File Editing |
| GitHub | Remote Repository |

---

## 📂 Project Structure

```text
GitDemo
│
├── README.md
├── .gitignore
├── welcome.txt
├── app.log          (Ignored)
└── logs/            (Ignored)
    └── error.log
```

---

## ⚙️ Git Ignore Configuration

### `.gitignore`

```text
*.log
logs/
```

### Explanation

| Pattern | Description |
|----------|------------|
| `*.log` | Ignores all files with `.log` extension |
| `logs/` | Ignores the complete logs directory |

---

## 💻 Commands Executed

### Create a Log File

```bash
echo Sample Log > app.log
```

### Create a Logs Folder

```bash
mkdir logs
echo Error Log > logs/error.log
```

### Create .gitignore File

```bash
notepad .gitignore
```

### Verify Repository Status

```bash
git status
```

### Add and Commit

```bash
git add .gitignore
git commit -m "Added gitignore configuration"
```

---

## 🔍 Verification

After configuring `.gitignore`, Git successfully ignores:

```text
app.log
logs/
logs/error.log
```

These files and folders do not appear in Git status.

Example:

```text
On branch master
nothing to commit, working tree clean
```

---

## 📸 Expected Output

### Ignored Files

```text
app.log
logs/
```

### Git Status

```text
On branch master
nothing to commit, working tree clean
```

---

## 🎓 Learning Outcomes

After completing this lab, I gained practical experience in:

- Creating and configuring `.gitignore`
- Ignoring file extensions
- Ignoring folders and their contents
- Maintaining a clean Git repository
- Understanding Git tracking behavior

---

## 🌟 Key Benefits of .gitignore

✔ Prevents unnecessary files from being committed

✔ Keeps repositories clean and organized

✔ Reduces repository size

✔ Improves collaboration among developers

✔ Protects temporary and generated files from version control

---

## ✅ Conclusion

The `.gitignore` file is an essential feature of Git that allows developers to exclude unnecessary files and directories from version control. By using `.gitignore`, repositories remain clean, organized, and easier to maintain.

---

<div align="center">

### ⭐ Git Ignore Lab Completed Successfully ⭐

</div>
