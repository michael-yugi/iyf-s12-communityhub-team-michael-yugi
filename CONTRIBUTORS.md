# Contributors


## Team Roster

| Member Name | GitHub Profile Handle | Project Assignment Role | Core Contributions |
| :--- | :--- | :--- | :--- |
|  Michael Yugi | [@michael-yugi](https://github.com/michael-yugi) | Team Lead / Engineer | Setup configuration tracking, Multi-branch scoping, project setup and layout compilation |
| Florence Gitau | [@gitau0076-cpu](https://github.com/gitau0076-cpu) | Team Member / Engineer |  |
| Hellen Wamucii Njue |  [@HellenWamuciiNjue](https://github.com/HellenWamuciiNjue) | Team member/ Engineer |  |
| Stephen Githaiga Muriu | [@stephen-Dev254](https://github.com/stephen-Dev254) | Team Member / Engineer | Shared components (Button/Input/Card), App.jsx state (posts, search, like/delete/add), posts utils + 5 Vitest tests, Exercises Task161-164 + Intro |


## Structural Breakdown Log
### Michael Yugi Project Setup & Layout

**Work completed / responsibilities:**
1. Created the `CONTRIBUTING.md` file containing team contribution guidelines.
2. Responsible for setting up the CommunityHub team repository.
3. Added team members as GitHub collaborators.
4. Configuring branch protection on the `main` branch.
5. Setting up React with Vite inside the `frontend/` directory.
6. Creating the layout components:
   - `Header.jsx`
   - `Footer.jsx`
   - `Sidebar.jsx`
7. Implementing the CommunityHub header with the site name, navigation links and login button.
8. Implementing the footer with useful links and copyright information.
9. Implementing the sidebar with About, Popular Posts and Tags/Categories sections.
10. Completing Task 15.1 (Setup and JSX), Task 15.2 (Header/Footer) and Task 15.4 (Layout and children prop).
11. Completing Daily Challenge Day 5 – PageLayout Component.

### Florence Gitau
-
- 
- 

### Hellen Wamucii Njue
-
-
-

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
