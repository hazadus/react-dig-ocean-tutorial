import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import React from 'react';
import Instructions from './Instructions';
import Clock from './components/Clock/Clock'

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: "\u{1F338}",
    name: "thunderbolt"
  },
  {
    emoji: "\u{1F389}",
    name: "party popper"
  },
  {
    emoji: "\u{1F30F}",
    name: "grinning face"
  },
]
const displayAction = false;

function App() {
  const greeting = "greeting";
  return (
    // Use <> and </> as wrapper because function 
    // must return only one HTML element.
    <div className="container">
      <h1 id={greeting}>
        Hello <strong>React</strong> world! <Badge bg="secondary">New!</Badge>
      </h1>
      <p>
        Writing HTML exactly from JavaScript!
      </p>
      {displayAction &&
        <p>This is hidden.</p>
      }
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
      <div>
        <Clock styling="secondary" />
        <Clock styling="success" />
        <Clock styling="danger" />
        <Clock />
      </div>
    </div>
  );
}

export default App;
