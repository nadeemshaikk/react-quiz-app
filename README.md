# React Quiz App

## Project Overview
The **React Quiz App** is an interactive web application designed to test users' knowledge across various domains. It supports multiple types of questions including:

- **Single Choice Questions**
- **Multiple Choice Questions**
- **True or False Questions**
- **Code Snippet Based Questions**

This app is designed as a modular training project that can be developed in stages to teach React fundamentals, state management, component design, conditional rendering, and handling of complex forms.

> Code snippets must not be rendered as plain text. Instead, use proper syntax highlighting for better readability and user experience. This can be achieved using libraries such as **PrismJS** or **react-syntax-highlighter**.

---

## Project Goals
- Build a quiz engine that supports multiple question types.
- Provide immediate feedback on answers.
- Track progress and final score.
- Maintain accessibility and responsiveness.
- Modular design for easy extension.

---

## Tech Stack
- **Frontend:** React (.jsx files), TailwindCSS or CSS Modules
- **State Management:** useState, useReducer, Context API (depending on stage)
- **Backend:** Spring Boot (for storing questions, results, user profiles, etc.)
- **Optional Syntax Highlighting:** PrismJS, react-syntax-highlighter

---

## Stages of Development

Each stage is planned to help new trainees focus on specific tasks and concepts. This progression ensures hands-on learning and builds a solid understanding of React and application development.

### Stage 1: Project Setup and UI Skeleton
- Initialize the Vite React project (with .jsx support).
- Create project structure and basic components.
- Design the main layout: header, question card, options, and footer.

### Stage 2: Implement Single Choice Questions
- Build a question component for single answer questions.
- Allow one option to be selected.
- Provide correct/incorrect feedback on submission.

### Stage 3: Implement Multiple Choice Questions
- Update the component to support multiple correct answers.
- Allow multi-selection and validate correctness.
- Update score calculation accordingly.

### Stage 4: Add True/False Questions
- Use buttons or toggle for boolean questions.
- Reuse the question component with conditional rendering.

### Stage 5: Add Code Snippet Questions
- Show code blocks with syntax highlighting.
- Use `react-syntax-highlighter` or `PrismJS` to render code in a readable format.
- These questions can be MCQ or True/False based.

### Stage 6: Quiz Flow and Score Summary
- Implement navigation between questions.
- Track and display current question number.
- Show quiz summary at the end with score and answers.

### Stage 7: Question Data and Schema
- Create a structured JSON or fetch from Spring Boot backend.
- Sample schema:
  ```json
  {
    "id": 1,
    "type": "code",
    "question": "What will be the output of the following code?",
    "code": "const [count, setCount] = useState(0);",
    "options": ["0", "1", "undefined"],
    "correctAnswers": ["0"]
  }
  ```

### Stage 8: Backend Integration with Spring Boot
- Create APIs for fetching quiz questions and posting results.
- Connect React app to backend using `fetch` or `axios`.
- Store user responses and scores.

### Stage 9: Styling and UX Enhancements
- Add animations and transitions.
- Highlight correct and selected options.
- Ensure responsiveness and accessibility.

### Stage 10 (Optional): Authentication and Leaderboard
- Add login/signup using Spring Security + JWT.
- Store user data and scores in a backend database.
- Create a leaderboard based on performance.

### Stage 11 (Optional): Admin Panel
- Develop a UI for managing quiz content.
- Allow adding/editing/deleting questions.
- Connect to backend APIs for full CRUD functionality.

### Stage 12 (Optional): Timer and Progress Tracking
- Add a countdown timer per question.
- Display a visual progress bar or step indicator.
- Show time remaining and auto-submit if time runs out.

### Stage 13 (Optional): Unit and Integration Testing
- Write tests for React components using Jest and React Testing Library.
- Use Spring Boot Test and Mockito for backend service and controller testing.
- Ensure API endpoints and user interactions are covered.

---

## Folder Structure
```
src/
  components/
    Question.jsx
    Option.jsx
    QuizSummary.jsx
    CodeSnippet.jsx
  data/
    questions.json (if using local data initially)
  services/
    api.js (for calling Spring Boot APIs)
  App.jsx
  main.jsx
```

---

## Skills Covered
- React Functional Components with .jsx extension
- Hooks: useState, useEffect, useReducer
- Conditional Rendering
- Working with Lists and Forms
- Code Syntax Highlighting (using PrismJS or react-syntax-highlighter)
- Responsive Design
- Backend API integration with Spring Boot
- Timer Logic and User Feedback
- Unit and Integration Testing

---

## Contribution
This project can be used as a group exercise or solo training project. Each stage can be taken up as a sprint in a bootcamp or workshop setting.

---

## License
MIT License

