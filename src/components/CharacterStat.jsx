import React from 'react'

function CharacterStats({ text }) {
  const characterCount = text.length;

//   const wordCount = text.trim()
//     ? text.trim().split(/\s+/).length
//     : 0;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Characters</h3>
        <p>{characterCount}</p>
      </div>
{/* 
      <div className="stat-card">
        <h3>Words</h3>
        {/* <p>{wordCount}</p> */}
      {/* </div>  */}
    </div>
  );
}

export default CharacterStats;