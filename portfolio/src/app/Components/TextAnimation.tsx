        // components/ChangingText.js
        import { useEffect, useState } from 'react';
        import { motion } from 'framer-motion';

        const texts = ["React,", "Vue.js,", "MongoDb,", "TypeScript,", "Next.js,", "Tailwind,", "Laravel. "];

        export default function TextAnimation(){
            const [index, setIndex] = useState(0);
            const [displayText, setDisplayText] = useState('');
            const [subIndex, setSubIndex] = useState(0);
            const [reverse, setReverse] = useState(false);
        
            useEffect(() => {
            if (subIndex === texts[index].length + 1 && !reverse) {
                setTimeout(() => setReverse(true), 1000);
                return;
            }
        
            if (subIndex === 0 && reverse) {
                setReverse(false);
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                return;
            }
        
            const timeout = setTimeout(() => {
                setDisplayText(texts[index].substring(0, subIndex));
                setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
            }, reverse ? 50 : 150);
        
            return () => clearTimeout(timeout);
            }, [subIndex, index, reverse]);
        
            return (
            <span>
                {displayText}
            </span>
        );
        };

