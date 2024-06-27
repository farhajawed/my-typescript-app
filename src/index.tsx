import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient'; // Import the configured Apollo Client

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// ApolloProvider is a component from the Apollo Client library. 
// It wraps your React application and provides the Apollo Client instance to the React component
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}> {/* Wrap the App with ApolloProvider */}
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
