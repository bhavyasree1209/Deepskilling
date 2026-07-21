\# Git Commands Hands-On Lab



\## Objective



This lab demonstrates the basic Git workflow, including repository initialization, checking status, staging files, committing changes, and preparing for remote repository integration.



\## Tools Used



\* Git for Windows

\* PowerShell / Git Bash

\* GitHub or GitLab



\## Commands Practiced



\* `git --version`

\* `git config`

\* `git init`

\* `git status`

\* `git add`

\* `git commit`

\* `git push`

\* `git pull`



\---



\## Step 1: Verify Git Installation



Check whether Git is installed correctly.



```bash

git --version

```



\*\*Output:\*\*



```text

git version 2.55.0.windows.3

```



\---



\## Step 2: Configure Git User Information



Configure the Git username and email.



```bash

git config --global user.name "Your Name"

git config --global user.email "your\_email@example.com"

```



Verify the configuration:



```bash

git config --global --list

```



\---



\## Step 3: Create a New Repository



Create a project folder and navigate into it.



```bash

mkdir GitDemo

cd GitDemo

```



Initialize a Git repository.



```bash

git init

```



\*\*Output:\*\*



```text

Initialized empty Git repository

```



\---



\## Step 4: Create a File



Create a sample text file.



```bash

echo Welcome to Git > welcome.txt

```



Verify the file:



```bash

dir

```



\---



\## Step 5: Check Repository Status



```bash

git status

```



Git identifies `welcome.txt` as an untracked file.



\---



\## Step 6: Add File to Staging Area



```bash

git add welcome.txt

```



Verify staging status:



```bash

git status

```



\---



\## Step 7: Commit Changes



Create a commit with a message.



```bash

git commit -m "Added welcome.txt"

```



\*\*Output:\*\*



```text

\[master (root-commit) 9dd051b] Added welcome.txt

1 file changed, 0 insertions(+), 0 deletions(-)

create mode 100644 welcome.txt

```



\---



\## Step 8: Verify Clean Working Tree



```bash

git status

```



\*\*Output:\*\*



```text

On branch master

nothing to commit, working tree clean

```



\---



\## Remote Repository Commands



Add a remote repository:



```bash

git remote add origin <repository-url>

```



Pull changes:



```bash

git pull origin master

```



Push changes:



```bash

git push -u origin master

```



\---



\## Learning Outcomes



After completing this lab, I was able to:



\* Install and verify Git.

\* Configure Git user settings.

\* Initialize a local Git repository.

\* Track files using Git.

\* Stage and commit changes.

\* Understand the purpose of Git status checks.

\* Prepare a repository for remote collaboration using GitHub/GitLab.



\## Conclusion



This exercise provided hands-on experience with essential Git commands and demonstrated the basic workflow used in version control systems for managing source code efficiently.



