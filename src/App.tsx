import React, {FC} from 'react';
import './App.css';
import Character from "./Components/character/Character";

const App: FC = () => {
  return (
      <div>
          <Character></Character>
          <Character/>
      </div>
  );
};

export default App;
