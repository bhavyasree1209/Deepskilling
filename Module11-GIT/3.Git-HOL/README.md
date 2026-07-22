<div align="center">

# 🌿 Git Branching and Merging Hands-On Lab

### Working with Branches, Commits, and Merge Operations in Git

</div>

---

## 📖 Overview

This lab demonstrates the process of creating branches, making changes independently, merging branches into the main branch, and managing branch history using Git.

Branching allows developers to work on new features without affecting the main codebase, while merging combines completed work back into the main branch.

---

## 🎯 Objectives

✅ Understand Git Branching

✅ Create and Switch Between Branches

✅ Commit Changes in a Branch

✅ Compare Differences Between Branches

✅ Merge a Branch into Master

✅ View Commit History Using Git Log

✅ Delete Branches After Successful Merge

---

## 🛠️ Tools Used

| Tool | Purpose |
|--------|---------|
| Git | Version Control |
| Git Bash | Command Execution |
| P4Merge | Visual Difference Comparison |
| GitHub / GitLab | Repository Hosting |

---

## 📂 Repository Structure

```text
GitDemo
│
├── README.md
├── welcome.txt
└── branchfile.txt
```

---

# 🌿 Branching

## Step 1: Create a New Branch

```bash
git branch GitNewBranch
```

---

## Step 2: View Available Branches

```bash
git branch -a
```

Example Output:

```text
* master
  GitNewBranch
```

The `*` symbol indicates the currently active branch.

---

## Step 3: Switch to the New Branch

```bash
git checkout GitNewBranch
```

or

```bash
git switch GitNewBranch
```

---

## Step 4: Create a New File

```bash
echo Branch Content > branchfile.txt
```

Verify:

```bash
git status
```

---

## Step 5: Add and Commit Changes

```bash
git add .
git commit -m "Added file in GitNewBranch"
```

---

## Step 6: Verify Status

```bash
git status
```

Expected Output:

```text
On branch GitNewBranch
nothing to commit, working tree clean
```

---

# 🔀 Merging

## Step 1: Switch Back to Master

```bash
git checkout master
```

---

## Step 2: Compare Differences

### Command Line Comparison

```bash
git diff master GitNewBranch
```

---

## Step 3: Visual Comparison Using P4Merge

```bash
git difftool master GitNewBranch
```

P4Merge displays the differences visually.

---

## Step 4: Merge Branch into Master

```bash
git merge GitNewBranch
```

Expected Output:

```text
Updating ...
Fast-forward
```

---

## Step 5: View Commit History

```bash
git log --oneline --graph --decorate
```

Example:

```text
* abc1234 (HEAD -> master) Added file in GitNewBranch
* xyz5678 Added README file
* 9dd051b Added welcome.txt
```

---

## Step 6: Delete Merged Branch

```bash
git branch -d GitNewBranch
```

Verify:

```bash
git branch
```

Expected Output:

```text
* master
```

---

## 💻 Commands Summary

```bash
git branch GitNewBranch
git branch -a
git checkout GitNewBranch
git add .
git commit -m "Added file in GitNewBranch"
git checkout master
git diff master GitNewBranch
git difftool master GitNewBranch
git merge GitNewBranch
git log --oneline --graph --decorate
git branch -d GitNewBranch
```

---

## 📸 Expected Outputs

### Branch List

```text
* master
  GitNewBranch
```

### Merge Success

```text
Updating ...
Fast-forward
```

### Branch Deletion

```text
Deleted branch GitNewBranch
```

---

## 🎓 Learning Outcomes

After completing this lab, I was able to:

- Create Git branches
- Switch between branches
- Perform independent development
- Compare branch differences
- Merge branches into the master branch
- Analyze commit history
- Delete branches after merging

---

## 🌟 Benefits of Branching and Merging

✔ Parallel Development

✔ Safe Feature Development

✔ Better Collaboration

✔ Easier Code Review

✔ Controlled Integration of Changes

---

## ✅ Conclusion

Git branching and merging are fundamental concepts in version control that allow developers to work independently on features, fixes, and enhancements while maintaining a stable main codebase. This lab provided practical experience with creating branches, committing changes, merging work, and managing repository history.

---

<div align="center">

## 🎉 Branching and Merging Lab Completed Successfully 🎉

</div>
