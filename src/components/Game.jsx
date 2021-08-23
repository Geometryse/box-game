import React, { useState, useEffect } from "react";
import "./game.css";
function MainGame(props) {
  const calculateCells = () => {
    const getInitClickedCells = (max) => {
      return Math.floor(Math.random() * max) + 1;
    };
    const allCells = {};
    const clickedCells = getInitClickedCells(3);
    let i = 0;
    let clickedCellsCount = 0;
    while (i < 9) {
      i++;
      const cell = Math.random();
      if (cell < 0.5 && clickedCellsCount < clickedCells) {
        // cell is clicked, increment and push
        clickedCellsCount++;
        allCells[i] = true;
      } else {
        // cell is not clicked
        allCells[i] = false;
      }
    }
    return allCells;
  };
  const [cells, setCells] = useState(calculateCells());
  const { totalCleared, setTotalCleared } = props;
  const handleCellClicked = (value) => {
    const updatedValue = {};
    updatedValue[value] = !cells[value];
    setCells({ ...cells, ...updatedValue });
    const { clicked, setClicked } = props;
    if (!clicked) setClicked(true);
  };
  useEffect(() => {
    let allTrue = true;
    let i = 0;
    while (i < 9) {
      i++;
      if (cells[i] === false) allTrue = false;
    }
    if (allTrue) {
      setCells(calculateCells());
      setTotalCleared(totalCleared + 1);
    }
  }, [cells]);
  return (
    <div className="game-container">
      {Object.keys(cells).map((e, i) => (
        <div
          className={`cell ${cells[i + 1]}`}
          key={i}
          onMouseDown={() => handleCellClicked(i + 1)}
        ></div>
      ))}
    </div>
  );
}

export default function Game() {
  const [totalCleared, setTotalCleared] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [frozeTime, setFrozeTime] = useState(0);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (totalCleared === 10) {
      let myInterval = setInterval(() => {
        setSeconds((parseFloat(seconds) + 0.01).toFixed(2));
      }, 10);
      return () => {
        clearInterval(myInterval);
      };
    }
  });
  useEffect(() => {
    setFrozeTime(seconds);
  }, [totalCleared]);
  return (
    <div>
      <MainGame
        totalCleared={totalCleared}
        setTotalCleared={setTotalCleared}
        clicked={clicked}
        setClicked={setClicked}
      />
      {seconds}s<p>Time to complete 10: {frozeTime}s</p>
    </div>
  );
}
