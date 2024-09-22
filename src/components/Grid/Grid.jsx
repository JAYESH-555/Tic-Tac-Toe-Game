import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../Helpers/checkWinner";
import { ToastContainer, toast } from 'react-toastify';

import './Grid.css'
import 'react-toastify/dist/ReactToastify.css';


function Grid({ numberOfCards }){
    
    const [turn, setTurn] = useState(true); 
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); 
    const [winner, setWinner] = useState(null);

    function play(index){
        console.log("Move played", index);
        if(turn == true){
            board[index] = "O";
        }else {
            board[index] = "X";
        }
        const win = isWinner(board, turn ? "O" : "X");
        if(win){
            setWinner(win);
            toast.success(`Game Over! Winner is ${win} 🏆! Congratulations!!🎉🎉`);
        }else if (!board.includes("")) {
            
            setWinner("draw");
            toast.warning("🤝 It's a Draw! Try again!");
        }   
        setBoard([...board]);
        setTurn(!turn);
    }


    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return(
        <div className="grid-wrapper">
            
            <ToastContainer position="top-right"/>
            
            
            {winner && (
                <>
                    <h1 className="turn-highlight">Result: {winner === "draw" ? "It's a Draw!" : `Winner is: ${winner}`}</h1>
                    <button className="reset" onClick={reset}>Play Again</button>
                </>
            )}
            
            <h1 className="turn-highlight">Current Turn : {(turn) ? 'O' : 'X'} </h1>
            <div className="grid">
                {board.map((value, idx) => { 
                    return <Card gameEnd ={winner ? true : false} onPlay={play} player={value} key={idx} index={idx}/>
                }) }
            </div>
        </div>
    );
}


export default Grid;




