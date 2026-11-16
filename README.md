# Week 8: CommunityHub React Fundamentals — Team Work Distribution

## Goal

Divide the React lessons, exercises, daily challenges, and CommunityHub frontend work so every team member owns meaningful work, contributes through GitHub, and practices the React fundamentals.

This team has confirmed a four-member allocation. The course kickoff text says teams should have 2–3 people, so confirm that the four-member arrangement is accepted by the instructor.

## Team Allocation at a Glance

| Member | GitHub username | Main responsibility | Primary deliverable |
| --- | --- | --- | --- |
| Member 1 | `michael-yugi` | Team lead, project setup, and layout | Vite setup, Header, Footer, Sidebar |
| Member 2 | `gitau0076-cpu` | Posts and props | PostCard and PostList |
| Member 3 | `HellenWamuciiNjue` | User components and post creation | UserCard, UserProfile, CreatePost |
| Member 4 | `stephen-Dev254` | State, events, shared components, and testing | Button, Input, Card, state logic, utility tests |

## Detailed Responsibilities

### Member 1 — Michael Yugi: Team Lead, Project Setup & Layout

- Create the team repository and add all members as collaborators.
- Configure branch protection on `main` and coordinate the initial Vite scaffold PR.
- Set up React with Vite inside `frontend/`.
- Create:
  - `src/components/Layout/Header.jsx`
  - `src/components/Layout/Footer.jsx`
  - `src/components/Layout/Sidebar.jsx`
- Header: show the CommunityHub logo/site name, navigation links, and a login button.
- Footer: include useful links and copyright information.
- Sidebar: include an About section, Popular Posts, and Tags/Categories.
- Lesson exercises:
  - Task 15.1: setup and JSX.
  - Task 15.2: Header/Footer.
  - Task 15.4: Layout and the children prop.
- Daily challenge: Day 5 — PageLayout component.
- **Deliverable:** working project foundation and layout components.

### Member 2 — Gitau0076-cpu: Posts & Props

- Create:
  - `src/components/Post/PostCard.jsx`
  - `src/components/Post/PostList.jsx`
- PostCard displays title, excerpt, author, date, and likes using props.
- PostList receives posts, renders them with `.map()`, uses unique keys, and shows an empty-state message when there are no posts.
- Lesson exercises:
  - Task 15.2: PostCard.
  - Task 15.3: passing props, dynamic PostCard, and rendering lists.
  - Task 16.2: event-handler patterns.
- Daily challenge: Day 3 — List with Keys.
- **Deliverable:** a posts display module that renders multiple posts.

### Member 3 — HellenWamuciiNjue: User Components & Post Creation

- Create:
  - `src/components/User/UserCard.jsx`
  - `src/components/User/UserProfile.jsx`
  - `src/components/Post/CreatePost.jsx`
- UserCard displays a username, profile information, and an image or placeholder.
- UserProfile presents user details in an organized layout.
- CreatePost includes a title input, content textarea, submit button, empty-input validation, and an `onAddPost` callback.
- Lesson exercises:
  - Task 15.3, Exercise 4: default props and destructuring.
  - Task 15.4, Exercise 1: children prop.
  - Task 16.1, Exercise 3: multiple state variables.
  - Task 16.2, Exercise 2: controlled forms.
- Daily challenges:
  - Day 1 — Greeting Component.
  - Day 2 — Card Component with Props.
- **Deliverable:** user components and a working create-post form.

### Member 4 — Stephen-Dev254: State Management, Shared Components & Testing

- Create shared components:
  - `src/components/shared/Button.jsx`
  - `src/components/shared/Input.jsx`
  - `src/components/shared/Card.jsx`
- Button supports primary/secondary/danger variants, sizes, disabled and loading states.
- Input is reusable and accepts props such as placeholder, value, and `onChange`.
- Card is a reusable wrapper supporting a title, children, and style variants.
- Manage posts with `useState`; add posts, like/unlike posts, delete posts, and calculate total posts and likes.
- Connect Member 2's PostList with Member 3's CreatePost.
- Create `src/utils/posts.js` and `src/utils/posts.test.js`.
- Write at least three tests for helpers such as sorting, searching, and filtering posts. Ensure `npm test` passes in `frontend/`.
- Lesson exercises:
  - Task 16.1: `useState`.
  - Task 16.2: events.
  - Task 16.3: arrays and objects.
  - Task 16.4: lifting state up.
- Daily challenge: Day 4 — Reusable Button.
- **Deliverable:** working application state, shared components, and tested utility functions.

## Responsibility Summary

| Work area | Member 1: Michael | Member 2: Gitau | Member 3: Hellen | Member 4: Stephen |
| --- | --- | --- | --- | --- |
| Project setup and Vite scaffold | Owns |  |  |  |
| Header / Footer / Sidebar | Owns |  |  |  |
| PostCard / PostList |  | Owns |  |  |
| CreatePost |  |  | Owns |  |
| UserCard / UserProfile |  |  | Owns |  |
| Button / Input / Card |  |  |  | Owns |
| App state and state connections |  |  |  | Owns |
| Utility functions and tests |  |  |  | Owns |

## GitHub Workflow for Every Member

1. Create your own feature branch from the updated `main` branch.
2. Write and test only your assigned files; avoid editing shared files unnecessarily.
3. Commit your work with clear messages and push your branch.
4. Open a pull request and describe what you changed.
5. Review a teammate's PR; merge only after the required approval.

Example branch names:

- `michael-yugi/layout-components`
- `gitau0076-cpu/post-components`
- `HellenWamuciiNjue/user-and-create-post`
- `stephen-Dev254/state-and-testing`

Additional workflow requirements:

- Nobody pushes directly to `main`.
- Each member must author their own PRs and review another member's PR.
- Check GitHub Insights → Contributors after the first merged PR to confirm commit attribution.
- Each member adds their own weekly entry to `CONTRIBUTORS.md`, including PRs opened, PRs reviewed, and issues closed that week.
- Every member submits the same team repository URL individually to Classroom.
- Configure `git config --global user.email` with the email associated with your GitHub account so your contributions are attributed correctly.

## Final Combined Project Structure

```text
frontend/
└── src/
    ├── components/
    │   ├── Layout/
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   └── Sidebar.jsx
    │   ├── Post/
    │   │   ├── PostCard.jsx
    │   │   ├── PostList.jsx
    │   │   └── CreatePost.jsx
    │   ├── User/
    │   │   ├── UserCard.jsx
    │   │   └── UserProfile.jsx
    │   └── shared/
    │       ├── Button.jsx
    │       ├── Input.jsx
    │       └── Card.jsx
    ├── utils/
    │   ├── posts.js
    │   └── posts.test.js
    ├── exercises/
    │   ├── michael-yugi/
    │   ├── gitau0076-cpu/
    │   ├── HellenWamuciiNjue/
    │   └── stephen-Dev254/
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

The repository also has a root `README.md`, `CONTRIBUTORS.md`, and Node `.gitignore`; `frontend/` contains the Vite package files and configuration.

## Suggested Order of Work

1. Member 1 creates the repository, configures collaboration and branch protection, and opens the Vite scaffold PR.
2. After the scaffold PR is merged, all members clone or pull the updated repository, install dependencies, and run the frontend locally.
3. Members work independently on their assigned components and exercises on feature branches.
4. Member 4 coordinates state connections with Members 2 and 3 after their component interfaces are agreed.
5. The team integrates the work, reviews the complete frontend, runs the tests, and checks the Week 8 checklist before submission.

## Submission Reminder

Submit the team repository URL to Classroom individually for each week. Every member needs their own GitHub contributions, PR authorship/reviews, correct commit attribution, and weekly `CONTRIBUTORS.md` entry. Keep building your individual portfolio repository too and document your CommunityHub contributions there as a personal showcase; it is not the team submission.
