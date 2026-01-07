# Event List with Search

A React application for viewing and searching upcoming events.

The focus of this project is clear component boundaries, predictable derived state, accessibility, and testable search behavior.

<img width="760" height="591" alt="image" src="https://github.com/user-attachments/assets/06f0810b-1830-4eac-973e-75f998da98cc" />

## Core Functionality

- Fetch and display a list of upcoming events
- Sort events by soonest date
- Filter events by name or location as the user types
- Display an empty state when no results match
- Visual highlighting of matched search terms

## Running the App
```
npm install
npm start
```

## Testing
```
npm test
```

### Testing Approach

The project includes both unit-level and integration-level tests focused on behavior that would realistically regress during refactors.

- Unit tests
  - Core filtering and sorting logic is tested via a pure function (getFilteredSortedEvents)
  - Verifies case-insensitive search, whitespace trimming, correct sorting, and immutability

- Integration tests
  - Validate end-to-end user behavior: data loading, searching, and empty states
  - Tests interact with the UI as a user would, rather than asserting implementation details

This approach keeps logic easy to reason about while ensuring user-visible behavior remains stable.


## Technical Decisions & Trade-offs

### Derived State

Filtering and sorting are treated as derived state rather than stored state.
This avoids synchronization bugs and keeps data flow predictable.

### Accessibility

- Semantic landmarks and list markup
- Explicit form labels (no placeholder-only inputs)
- Keyboard-navigable scroll container
- Screen reader checks performed with VoiceOver
- Automated accessibility checks using axe DevTools

Accessibility improvements focus on correctness and usability without adding unnecessary complexity.

### Search Behavior

Search is performed client-side using simple string matching.
Given the small dataset size, debouncing was intentionally avoided to preserve immediate feedback and reduce complexity.

### Highlighting

Search term highlighting is implemented as a visual enhancement only. 
Core search behavior does not depend on highlighting logic.


## Future Improvements

If this were to evolve beyond a take-home exercise:

- Server-side search for larger datasets
- Pagination or virtualized lists
- Error boundaries and retry handling
- URL-driven search state
- CI checks for tests and accessibility


## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Testing Library
- Jest


