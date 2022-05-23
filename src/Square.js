import React from 'react';
import './index.css';
import { motion } from 'framer-motion';

const Square = (props) => {
    return (
        <motion.button whileHover={{scale:1.2}} className='square' onClick={props.onClickEvent}>{props.value}</motion.button>
    )
}

export default Square;