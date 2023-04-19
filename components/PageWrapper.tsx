'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react';

interface pageWrapperProps {
    children: ReactNode;
}

export default function PageWrapper( props: pageWrapperProps ) {
   const { children }= props;
   
    return (
   <>
        <AnimatePresence>
            <motion.div 
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 15}}
            transition={{delay: 0.25}}
            >
            {children}
            </motion.div>
        </AnimatePresence>  
    </>
   ) 
};