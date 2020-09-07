# Git Fundamentals - Part 2

## What are branches?

Branches are used to develop features in isolation, changing a few files and then when it is complete, saving the new code.

The master branch is our "default" git branch when you create a repository.

The norm is to use other branches for development and then merge them back to the master branch via pull requests (PRs), we will talk about PRs in later parts.

## Creating a new feature

create a new branch named "my_feature" and switch to it using:

`git checkout -b my_feature`

Any changes can now be committed to this branch, also, if you began doing changes already, git is clever enough to bring those non-branch changes to this new branch. Some other commands:

To switch back to master at a later time

`git check master`

To delete the branch again

`git branch -d my_feature`

## Committing changed files

You can add changes (remember our Index?, this can also be a new branch) using the below while you are still on the new branch:

``git add .`

This is the first step in the basic git workflow. To actually commit these changes use:

`git commit -m "I've created a feature"`

The **-m** flag is for the messaged to be use alongside this commit.

Now the file is committed to the **HEAD**, but not in your remote repository yet.

A branch is not available to others unless you push the branch to your remote repository

`git push origin my_feature`
