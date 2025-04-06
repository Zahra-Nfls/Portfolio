import { motion } from 'framer-motion';
export default function ZoomImage() {
    return (
        <motion.img
            src="./../../public/images/sakura (2).png"
            alt="Zoomable"
            className="w-full h-auto"
            initial={{ scale: 1 }} // initial size of the image
            animate={{
                scale: [1, 1.1, 1] // Zoom in and out infinitely
            }}
            transition={{
                duration: 2, // Total time for a full zoom-in and zoom-out cycle
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: "loop", // Loops infinitely
                ease: "easeInOut" // Smooth easing effect
            }}
        />
    );
}
