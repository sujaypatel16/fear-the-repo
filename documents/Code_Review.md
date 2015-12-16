# Code Review Workflow #
---

1. Update local dev branch with repo dev  | git pull upstream dev
2. Create a local branch which is identical to local dev branch | git checkout -b '[insert branch name]'
3. Create remote connection to team member requesting pull | git remote add '[insert remote name]' https://github.com/ [insert team member git handle]/fear-the-repo
4. Pull code from team member requesting pull | git pull [insert remote name] [insert branch name]
5. Resolve any conflicts if any. Note, if you and team member pull updated code based on repo's dev branch, there should be none to minimal code conflicts.
6. Test application with team members code.
7. Analyze code and file changes on github
8. Communicate with team member regarding issues, if any
9. Accept pull request