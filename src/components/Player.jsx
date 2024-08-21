import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    // when updating your state based on the previous value of that state, a function should be passed to the state updating function instead of the new state value you wanna have.

    // the function passed will be called by react, gets the previous state value and sets the new state based on what the previous state was.
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChange(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} /> // getting a value out of an input and feeding it back into an input is called 2-way binding.
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
