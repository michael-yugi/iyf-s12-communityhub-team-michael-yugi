# Contributors


## Team Roster

| Member Name | GitHub Profile Handle | Project Assignment Role | Core Contributions |
| :--- | :--- | :--- | :--- |
|  Michael Yugi | [@michael-yugi](https://github.com/michael-yugi) | Team Lead / Engineer | Setup configuration tracking, Multi-branch scoping, project setup and layout compilation |
| Florence Gitau | [@gitau0076-cpu](https://github.com/gitau0076-cpu) | Team Member / Engineer | Cloned repository,Posts display module (PostCard.jsx, PostList.jsx), dynamic props rendering, empty-state handling, list rendering with unique keys, and post interaction events
| Hellen Wamucii Njue |  [@HellenWamuciiNjue](https://github.com/HellenWamuciiNjue) | Team member/ Engineer |  |
| Stephen Githaiga Muriu | [@stephen-Dev254](stephengithaigamuriu@gmail.com) | Team Member / Engineer |  |


## Structural Breakdown Log
### Michael Yugi Project Setup & Layout
**Work completed / responsibilities:**
1. Created the `CONTRIBUTORS.md` file containing team contribution guidelines.
2. Responsible for setting up the CommunityHub team repository.
3. Added team members as GitHub collaborators.
4. Configuring branch protection on the `main` branch.
5. Setting up React with Vite inside the `frontend/` directory.
6. Creating the layout components (`Header.jsx`, `Footer.jsx`, `Sidebar.jsx`).
7. Completing Task 15.1, Task 15.2, and Task 15.4 (Layout & children prop).
8. Completing Daily Challenge Day 5 – PageLayout Component.

### Florence Gitau
**Role:** Team Lead & Member 2 — Posts & Props (`PostCard.jsx`, `PostList.jsx`)
* **PRs Opened & Merged:**
  * Task 15.2(PostCard):  https://github.com/michael-yugi/iyf-s12-communityhub-team-michael-yugi/pull/6
  * Task 15.3 (Props): https://github.com/michael-yugi/iyf-s12-communityhub-team-michael-yugi/pull/8
  * Task 16.2 (Events): https://github.com/michael-yugi/iyf-s12-communityhub-team-michael-yugi/pull/5
  * Task Day 3 Challenge:https://github.com/michael-yugi/iyf-s12-communityhub-team-michael-yugi/pull/7
  * Contributors.md:
* **PRs Reviewed:**
  * Teammate PR : https://github.com/michael-yugi/iyf-s12-communityhub-team-michael-yugi/pull/11



### Hellen Wamucii Njue
-
-
-

### Hellen Wamucii Njue
**Work completed / responsibilities:**
1. Created a reusable `UserCard` component to display user profile information, with fallback initials when no avatar is supplied.
2. Worked on a `UserProfile` component that presents user details and interests, reusing `UserCard`.
3. Worked on a `CreatePost` controlled form with input validation and a callback for adding a post.
4. Practiced React default props, destructured props, and the `children` prop through reusable button and card exercises.
5. Practiced managing multiple state variables and building controlled forms with React state.
6. Created a greeting component with default props and a card component with selectable variants for the daily challenges.

### Stephen Muriu
-### Stephen Githaiga Muriu

**Work completed / responsibilities:**
1. Created shared components:
   - `Button.jsx` - variant, size, loading, disabled, children
   - `Input.jsx` - label, name, value, onChange, type, placeholder
   - `Card.jsx` - variant, title, children
2. Implemented `App.jsx` with lifted state: posts array, search, add post, like, delete, totalLikes using `useState`.
3. Created `src/utils/posts.js`:
   - `sortNewestFirst(posts)`
   - `searchPosts(posts, query)` - searches by title and author
   - `formatPostDate(date)`
4. Created `src/utils/posts.test.js` - 5 Vitest tests passing.
5. Completed exercises in `frontend/src/exercises/Stephen-Dev254/`:
   - `Intro.jsx`
   - `Task161.jsx` - Counter, Toggle, UserForm
   - `Task162.jsx` - EventExamples, ContactForm
   - `Task163.jsx` - TodoList (arrays in state)
   - `Task164.jsx` - Stats, PostList, PostCard with lifting state up
6. Verified: `npm test` - 5 passed, `npm run build` - built in 170ms.
-
