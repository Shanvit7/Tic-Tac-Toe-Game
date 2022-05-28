import Square from "./Square";
import { useSelector, useDispatch } from "react-redux";
import { click, rematch, turnTonext } from "./boardSlice";
import { calculateWinner } from './boardSlice';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

function Board() {
    const gameBoard = useSelector(state => state.board.square);
    const xIsnext = useSelector(state => state.board.xIsnext)
    const playerX = useSelector(state => state.board.playerX);
    const playerO = useSelector(state => state.board.playerO);
    const dispatch = useDispatch();
    const winner = calculateWinner(gameBoard);
    const status = winner ? winner === 'X' ? `${playerX} Won` : `${playerO} Won` : gameBoard.every((block) => { return block !== null }) ? 'Draw' :
        `${xIsnext ? `${playerX}'s turn - X ` : `${playerO}'s turn - O `}`



    const renderSquare = (i) => {
        return (
            <Square value={gameBoard[i]}
                onClickEvent={() => dispatch(click(i))}
            />
        )
    }

    const Clock = () => {
        return (
            <motion.div className="clock" initial={{y:50,x:-1000}} animate={{y:20,x:0,scale:2}}  ><Countdown date={Date.now() + 5000} onComplete={() => { dispatch(turnTonext()) }}></Countdown></motion.div>
        )
    }


    return (
        <>
            {winner === 'X' || winner === 'O' || status === 'Draw' ? <motion.h1 initial={{y:-500}} animate={{y:50,x:15,scale:2.2}}>Game Over!!!</motion.h1> : <Clock />}
            <motion.div className="status" style={{ color: 'whitesmoke' }} initial={{ y: -500 }} animate={{ y: 100 ,scale:1.2}} transition={{ ease: 'easeOut', duration: 3 }}>{status}</motion.div>
            <motion.div initial={{ y: -500 }} animate={{ y: 150 }} transition={{ ease: "easeOut", duration: 2 }} className='board-row'>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</motion.div>
            <motion.div initial={{ x: -1000 }} animate={{ y: 150, x: 0 }} transition={{ ease: "easeOut", duration: 2 }} className='board-row'>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</motion.div>
            <motion.div initial={{ y: 1300 }} animate={{ y: 150 }} transition={{ ease: "easeOut", duration: 2 }} className='board-row'>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</motion.div>
            {winner === 'X' || winner === 'O' || status === 'Draw' ? <motion.div whileHover={{ scale: 1.5 }} style={{ color: 'cyan' }} initial={{ y: 1300 }} animate={{ y: 180 }}><button onClick={() => dispatch(rematch())}>Rematch</button></motion.div> : null}
        </>
    )
}

export default Board;