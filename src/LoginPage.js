import {
    Box, Center,
    Input,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { admitX, admitO } from "./boardSlice";
import './index.css';
import {motion} from 'framer-motion';
/*
*/

function LoginPage() {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.id === 'X') {
            dispatch(admitX(event.target.value));
        } else if (event.target.id === 'O') {
            dispatch(admitO(event.target.value));
        }
    }

    return (
        <>
            <Center h='500px'>
                <Box bg='none' w='100%' p={4} color='white'>
                    <Center> 
                      <motion.div className='title' initial={{y:-500}} animate={{y:-100,scale:2}} transition={{ease:'easeOut',duration:2}} > 
                        Tik-Tok-Toe
                      </motion.div>
                    </Center>
                    <Center>
                        <motion.div className='sub-text' initial={{ y: -500 }} animate={{ y: -50, scale: 1.5 }} transition={{ ease: 'easeOut', duration: 2 }} >Make your move under 5 seconds</motion.div>
                    </Center>
                    <motion.div whileHover={{ scale: 1.3, transition: { duration: 0.5 } }} initial={{ y: -500 }} animate={{ y: 10 }} transition={{ ease: 'easeOut', duration: 2 }} ><Input onChange={handleChange} borderRadius='none' borderRight='none' borderLeft='none' borderTop='none' color='white' id='X' placeholder='Player X name' _placeholder={{ color: 'skyblue' }} /></motion.div>
                    <motion.div whileHover={{scale:1.3, transition: {duration:0.5}}} initial={{ y: -500 }} animate={{ y:50}} transition={{ ease: 'easeOut', duration: 2 }}  ><Input onChange={handleChange}  borderRadius='none' borderRight='none' borderLeft='none' borderTop='none' color='white' id='O' placeholder='Player O name' _placeholder={{ color: 'skyblue' }} /></motion.div>
                </Box>
            </Center>
         <Center h='100px'>
                <motion.div whileHover={{ scale: 1.5, transition: { duration: 0.8 } }} initial={{ y: 600 }} animate={{ y:-70 }} transition={{ease:'easeIn',duration:2}} ><Button colorScheme='whatsapp' variant='outline'><Link to='/play'>Lets Play</Link></Button></motion.div>
         </Center>
    </>
    )
}

export default LoginPage;