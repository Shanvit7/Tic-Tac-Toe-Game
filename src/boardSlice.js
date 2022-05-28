import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playerX:'Player 1',
    playerO:'Player 2',
    square:[
        null, null, null,
        null, null, null,
        null, null, null
    ],
    xIsnext:true,
}

export const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ]

    for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]; // X or O
        }
    }

    return null;
}



export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        click(state, action){
            const winnerDeclared = Boolean(calculateWinner(state.square));
            const squareFilled = Boolean(state.square[action.payload]);
            if (winnerDeclared || squareFilled) {
                return ;
            }
            state.square[action.payload] = state.xIsnext ? 'X':'O';
            state.xIsnext = !state.xIsnext;

        },
        rematch(state){
           state.square = initialState.square;
        },
        admitX(state,action){
            state.playerX = action.payload;
        },
        
        admitO(state,action){
            state.playerO = action.payload;
        },
        turnTonext(state){
            state.xIsnext = !state.xIsnext;
        },
    },
})

export const { click, admitX, admitO, rematch, turnTonext} = boardSlice.actions;

export default boardSlice.reducer;


