import React from "react";


interface BoardProps {
    children: React.ReactNode;
}

const Board: React.FC<BoardProps> = ({children}) => {
    return(
        <div className="board-general">
            {children}
        </div>

    )
}

export default Board;