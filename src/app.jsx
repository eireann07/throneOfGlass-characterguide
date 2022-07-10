import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// Dev Notes: Based on brief
//1. Create components from data
//2.Identify props to pass
//3. Map through emojipedia array &render entry components
// --> need to export emojipedia const to get to App.jsx

const App = () => {
  return (
    <div>
      <h1>
        <span>throne of glass character guide</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            desc={emojiTerm.description}
          />
        ))}
      </dl>
    </div>
  );
};

export default App;
