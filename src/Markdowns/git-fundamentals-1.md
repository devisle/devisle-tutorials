# Git Fundamentals - Part 1

## Cloning a repository

To checkout (copy) a repository online, for example from Github, we do the following:

`git clone /path/to/repository`

when doing it via a remote server, the command will be:

`git clone username@host:/path/to/repository`

## Git workflow

your local repository will made up of three "trees" maintained by git.

The first one is a **Working Directory** this holds the actual codebase files.

The second one is the **Index** which is like a staging area, this area is used for keeping a record of the updated / changed files to commit.

The third is the **HEAD** which references the last commit you've made.

So how do we commit to the Index? Can we have branches of a tree? and when do know to save our files? Find out in the next part...
