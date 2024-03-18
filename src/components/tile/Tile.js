// Tile.js
import React from 'react';
import './Tile.scss';

const tablica_position_x=[]
const tablica_position_y=[]
// Define generateCellStyles function
function generateCellStyles(rows) {
  let styles = '';

  const columns = rows;
  const size = 100;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      styles += `
        .number.slot--${j * rows + i} {
          left: calc(${i} * ${size}px);
          top: calc(${j} * ${size}px);
          background-position: ${j * size}px ${i * size}px;
        }
      `;
     
    }
  }


  return styles;
}
  
  console.log(tablica_position_x);
  console.log("daddas")
  console.log(tablica_position_y);

const Tile = ({ number, moveTile, size }) => {
  const sas = Math.sqrt(size);
  const cellStyles = generateCellStyles(sas);

  return (
    <div>
      <style>{cellStyles}</style>

      <div
        onClick={() => moveTile(number)}
        className={`number ${number.value === number.index + 1 ? 'correct' : ''} ${
          number.value === size * size / size ? 'disabled' : ''
        } slot--${number.index}`}
        style={{
          
        }}
        
        >
        {number.value === size ? '' : number.value}
      </div>
    </div>
  );
};

export default Tile;
