import { useState } from 'react';
import Input from './components/Input.jsx';
import CharacterStat from './components/CharacterStat.jsx';

function App() {
  const [text, setText] = useState('')
const maxlimit = 200;

const handleTextChange = (newText) => {
  if (newText.length <= maxlimit) {
    setText(newText);
  }
};
  return (
    <>
      <div className="app-container">
        <h1>Character Counter</h1>
        <p className="app-description">
           type something :
        </p>
        <Input text={text} onTextChange={handleTextChange} />
         {
        text.length >= maxlimit && (
          <p className="warning" style={{ color: 'red', fontWeight: 'bold' }}>
            warning: You've reached the character limit!
          </p>
        )
      }
      </div>
      
      <CharacterStat text={text} />
     
    </>
  )
}

export default App;
