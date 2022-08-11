import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Routes>
          <Route path='' element={<Home />}>
          </Route>
          <Route path='/chat' element={<Chat />}>
          </Route>
          <Route path='/tinderCards' element={<TinderCards />}>
          </Route>
        </Routes>
      
      {/* Image de profil */}
      {/* Boutons */}
      {/* Chats */}
      {/* Chat individuel */}

      </Router>
      
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Chat() {
  return <h2>Chat</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function TinderCards() {
  return <TinderCards />;
}

export default App;