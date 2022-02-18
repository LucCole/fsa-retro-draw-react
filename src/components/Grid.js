import React from 'react';
import Cell from './Cell';

const Grid = (props) => {

    const cellList = props.cellList
    const setCellList = props.setCellList
    const activeColor = props.activeColor

    return (
    <div className="grid">
        {cellList.map((cell, index) => {

            return (
            <Cell 
            key={'grid-'+index} 
            color={cell.color} 
            handleClick={() => {
                const copiedCellList = [...cellList];
                copiedCellList[index].color = activeColor;
                setCellList(copiedCellList);
            }}/>
            )
            
        })}
    </div>)
}

export default Grid;