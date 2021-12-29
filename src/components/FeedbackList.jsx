import { motion , AnimatePresence } from 'framer-motion'
import React , {useState} from 'react'
import FeedbackItem from './FeedbackItem'

// use of  Context !!
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext'





function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)
   

    if(!feedback || feedback.length === 0 ){
        return <p>No Feedback Yet </p>
    }
    



    return (
        <div className='feedback-List'>
            <AnimatePresence>
                
                {feedback.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                    >
                            <FeedbackItem key={item.id} Item={item} 
                            
                            />
                    </motion.div>
                
                ))}
            </AnimatePresence>    
        </div>
    )





    // return (
    //     <div className='feedback-List'>
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} Item={item} deleteHandler = {deleteHandler}/>
    //         ))}

    //     </div>
    // )
}

export default FeedbackList
