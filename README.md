# CommunityHub Team - Week 8

This repository is the shared project workspace for the CommunityHub React frontend built during Week 8 of the IYF program.

This version of the README is intended as the current team working guide for the confirmed 4-member team.

## Week 8 Goal

Build the basic CommunityHub React frontend using Vite and React fundamentals.

The project must include:

- Header
- Footer
- Sidebar
- Post list rendered from state
- Create post form that adds posts
- Utility functions with tests
- Function components using `useState`
- Components organized in `src/components/`
- At least one helper in `src/utils/` with 3+ tests

## Team Allocation

### Member 1 — Michael Yugi
Role: Team Lead, Project Setup & Layout

Responsibilities:

- Create the team repository and add all members as collaborators
- Configure branch protection on `main`
- Create the initial Vite scaffold in `frontend/`
- Set up the project foundation and layout components
- Build the Header, Footer and Sidebar
- Complete the relevant lesson exercises and daily challenge

Deliverables:

- Vite React setup
- `Header.jsx`
- `Footer.jsx`
- `Sidebar.jsx`
- Project structure and repository organization

### Member 2 — Gitau0076-cpu
Role: Posts & Props

Responsibilities:

- Create `PostCard.jsx` and `PostList.jsx`
- Display post title, excerpt, author, date and likes with props
- Render lists with `.map()` and proper keys
- Handle an empty state message
- Complete related exercises and daily challenge

Deliverables:

- Reusable `PostCard`
- `PostList` that renders multiple posts
- Props-driven rendering

### Member 3 — Hellen Wamucii Njue
Role: User Components & Post Creation

Responsibilities:

- Create `UserCard.jsx`, `UserProfile.jsx` and `CreatePost.jsx`
- Build the user profile display
- Build a working post creation form with validation
- Manage controlled form logic
- Complete related exercises and daily challenges

Deliverables:

- User profile UI
- Create post form
- Controlled form logic

### Member 4 — Stephen-Dev254
Role: State Management, Shared Components & Testing

Responsibilities:

- Create shared components: `Button.jsx`, `Input.jsx`, `Card.jsx`
- Manage the app state with `useState`
- Add posts, like/unlike actions, delete posts and calculate totals
- Connect the form and list data flow
- Write helper functions and tests in `src/utils/`
- Complete the state and event exercises

Deliverables:

- Shared UI components
- App-level state management
- Working utility functions and passing tests

## Work Distribution Summary

| Work Area | Member 1 | Member 2 | Member 3 | Member 4 |
| --- | --- | --- | --- | --- |
| Project setup | Owns |  |  |  |
| Header / Footer / Sidebar | Owns |  |  |  |
| PostCard / PostList |  | Owns |  |  |
| CreatePost |  |  | Owns |  |
| UserCard / UserProfile |  |  | Owns |  |
| Shared components |  |  |  | Owns |
| State management |  |  |  | Owns |
| Utility tests |  |  |  | Owns |

## GitHub Workflow for Every Member

1. Create your own feature branch from the updated `main` branch.
2. Work only on your assigned files and avoid unnecessary edits to shared files.
3. Commit with clear, specific messages.
4. Push your branch and open a pull request.
5. Review a teammate's PR.
6. Merge only after required review and approval.

Example branch names:

- `michael-yugi/layout-components`
- `gitau0076-cpu/post-components`
- `hellenwamuciinjue/user-and-create-post`
- `stephen-dev254/state-and-testing`

Important rules:

- No direct pushes to `main`
- Every member must author their own PRs
- Every member must review another member's PR
- Check GitHub Insights → Contributors after the first merged PR
- Each member must add their own weekly entry to `CONTRIBUTORS.md`
- Every member submits the same team repo link individually to Classroom

## Final Combined Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── Post/
│   │   │   ├── PostCard.jsx
│   │   │   ├── PostList.jsx
│   │   │   └── CreatePost.jsx
│   │   ├── User/
│   │   │   ├── UserCard.jsx
│   │   │   └── UserProfile.jsx
│   │   └── shared/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Card.jsx
│   ├── utils/
│   │   ├── posts.js
│   │   └── posts.test.js
│   ├── exercises/
│   │   ├── michael-yugi/
│   │   ├── gitau0076-cpu/
│   │   ├── HellenWamuciiNjue/
│   │   └── Stephen-Dev254/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── index.html
└── .gitignore
```

## Requirements to Complete This Week

- Create React project with Vite
- Understand JSX syntax
- Create functional components
- Use props to pass data
- Render lists with `map()` and `key`
- Use the `children` prop for composition
- Use `useState`
- Handle events (`onClick`, `onChange`, `onSubmit`)
- Manage arrays and objects in state
- Lift state up to share between components
- Complete the CommunityHub basic frontend structure
- Complete the daily challenges
- Ensure the project runs and tests pass

## Suggested Order of Work

1. Member 1 creates the repository, adds collaborators and configures branch protection.
2. The scaffold PR is merged.
3. All members clone or pull the updated repository.
4. Each member works independently on their assigned components and exercises.
5. Member 4 coordinates integration and state-sharing once the components are ready.
6. The team reviews, tests and finalizes the project before submission.

## Final Note

This README serves as the current team guide for the Week 8 CommunityHub project until the final implementation is complete and reviewed.
