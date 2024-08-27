// components/AnimatedHeading.js
    import { motion } from 'framer-motion';

    export default function H1Animation(){
    return (
        <motion.h1
        className="text-4xl font-bold text-center mb-3 font-dm"
        animate={{
            scale: [1, 1.05, 1],
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
        }}
        >
        Hi There.... I am 𝚉𝚊𝚑𝚛𝚊,
        </motion.h1>
    );
    };


