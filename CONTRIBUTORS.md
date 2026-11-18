# Contributors


## Team Roster

| Member Name | GitHub Profile Handle | Project Assignment Role | Core Contributions |
| :--- | :--- | :--- | :--- |
|  Michael Yugi | [@michael-yugi](https://github.com/michael-yugi) | Team Lead / Engineer | Setup configuration tracking, Multi-branch scoping, project setup and layout compilation |
| Florence Gitau | [@gitau0076-cpu](https://github.com/gitau0076-cpu) | Team Member / Engineer | Cloned repository,Posts display module (PostCard.jsx, PostList.jsx), dynamic props rendering, empty-state handling, list rendering with unique keys, and post interaction events
| Hellen Wamucii Njue |  [@HellenWamuciiNjue](https://github.com/HellenWamuciiNjue) | Team member/ Engineer |  |
| Stephen Githaiga Muriu | [@stephen-Dev254](stephengithaigamuriu@gmail.com) | Team member/ Engineer | Shared components (Button/Input/Card), App.jsx state (posts, search, add/like/delete, totalLikes), posts utils + 5 Vitest tests, Exercises Task161-164 |


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
**Role:**Member 2 — Posts & Props (`PostCard.jsx`, `PostList.jsx`)
1. Created the PostCard.jsx and PostList.jsx components inside frontend/src/components/Post/ for the Posts and Props module.
2. Implemented dynamic post rendering in PostCard.jsx to display the title, excerpt, author, date, and likes using props.
3. Built list rendering in PostList.jsx using .map() with unique keys and an empty-state message when no posts are available.
4. Added interactive post event handling patterns for user engagement.
5. Created personal React practice components inside frontend/src/exercises/gitau0076-cpu/.
6. Completed Task 15.2 (PostCard), Task 15.3 (passing props, dynamic PostCard, and rendering lists), and Task 16.2 (event handler patterns).
7. Completed Daily Challenge Day 3 – List with Keys. 
* **PRs Reviewed:**
  * Teammate PR : https://github.com/michael-yugi/iyf-s12-communityhub-team-michael-yugi/pull/11
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
