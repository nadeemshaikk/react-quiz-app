# Sprint Plan: React Quiz App (Solo Developer)

## Sprint Overview
This sprint plan outlines the development roadmap for the React Quiz App. Designed for a solo developer, this plan helps maintain focus and structure by breaking tasks into manageable stages.

---

## Sprint Stages (Aligned with README)

### Sprint 1: Project Initialization
- Initialize Vite React project (with `.jsx` extension support)
- Setup folder structure
- Install dependencies (React, TailwindCSS, etc.)

### Sprint 2: Basic UI Skeleton
- Create basic layout: Header, Footer, Main Container
- Component structure: `App`, `Quiz`, `Question`, `Option`

### Sprint 3: Single Choice Question Component
- Render single-choice question
- Validate user selection
- Display feedback

### Sprint 4: Multiple Choice Question Component
- Support multiple selections
- Update state management for array-based answers
- Display feedback and validation

### Sprint 5: True/False Question Component
- Toggle-based UI or buttons
- Integrate into existing question display

### Sprint 6: Code Snippet Integration
- Use PrismJS or `react-syntax-highlighter`
- Add a `CodeSnippet` component
- Integrate code display within question

### Sprint 7: Navigation and Quiz Flow
- Track current question
- Handle `Next`, `Previous`, and `Submit`
- Final score and review screen

### Sprint 8: Data Source Integration
- Replace static JSON with Spring Boot REST API
- Fetch questions and post results
- API service layer (`services/api.js`)

### Sprint 9: Styling and UX
- Add TailwindCSS or CSS Modules
- Add interactivity and animations
- Highlight correct/wrong answers
- Ensure accessibility and mobile responsiveness

### Sprint 10: Authentication (Optional)
- Basic login/signup form
- Use Spring Security + JWT
- Secure API routes

### Sprint 11: Admin Panel (Optional)
- Add UI to create/edit/delete quiz questions
- Role-based access (admin vs user)

### Sprint 12: Timer & Progress Bar (Optional)
- Countdown per question or quiz
- Add progress bar indicator
- Auto-submit on timeout

### Sprint 13: Testing (Optional)
- Write unit tests for React components using Jest
- Write integration tests for Spring Boot APIs
- Ensure UI and API robustness

---

## Folder Structure
```bash
src/
  components/
    questions/
      Question.jsx         # Renders question text and delegates option rendering
      Option.jsx           # Represents individual answer options (single/multiple selection)
      CodeSnippet.jsx      # Renders code blocks with syntax highlighting
    results/
      QuizSummary.jsx      # Displays user's performance, correct answers, and score summary
  data/
    questions.json         # Local fallback question set for development/testing purposes
  services/
    api.js                 # Encapsulates API calls to the Spring Boot backend
  App.jsx                  # Root component of the app; sets up routes and high-level state
  main.jsx                 # Entry point for React DOM rendering and Vite bootstrap
```

---

## Sprint Completion Guidelines
- Each sprint should be self-contained and deployable.
- Post every sprint: perform basic testing and validation.
- Maintain README and technical documentation.

---

## Optional Enhancements (Post-MVP)
- Add charts to visualize user performance
- Add audio or image-based questions
- Export quiz results as PDF or CSV

---

## Notes
- Sprint cycles may span days or weeks depending on developer bandwidth.
- Use GitHub Issues and Projects to track sprint progress.
- Code reviews or retrospectives can be done weekly (even solo).

