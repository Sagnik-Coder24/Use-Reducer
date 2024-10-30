# React useReducer Hook Example

A React web application demonstrating the use of the `useReducer` hook for state management. This app showcases how to manage complex state logic in a more predictable way.

## Features

- Demonstrates the use of `useReducer` hook
- Manage complex state logic
- Clean and maintainable code

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sagnik-Coder24/Use-Reducer.git
   cd Use-Reducer
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173` to see the app in action.

## Usage

### Understanding `useReducer`

The `useReducer` hook is an alternative to `useState` for managing state in React components. It is particularly useful for managing complex state logic and when the next state depends on the previous state.

### Example Code

Here’s a simple example of how to use the `useReducer` hook in a React component:

```javascript
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;
```

### Explanation

- **Initial State:** The `initialState` object defines the initial state of the component.
- **Reducer Function:** The `reducer` function takes the current state and an action, and returns the new state based on the action type.
- **useReducer Hook:** The `useReducer` hook takes the reducer function and the `initialState` as arguments, and returns the current state and a dispatch function to send actions to the reducer.

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Contributions

We welcome contributions from the community! Feel free to open issues and pull requests to suggest improvements, add new features, or fix bugs. Here’s how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## Suggestions & Feedback

If you have suggestions or feedback on how to improve this project, feel free to post them on our [GitHub Issues](https://github.com/Sagnik-Coder24/Use-Reducer/issues) page. We love hearing your ideas and collaborating with the community!
