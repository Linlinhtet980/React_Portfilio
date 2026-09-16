import { motion } from 'framer-motion';

export default function TextReveal({ children, delay = 0, duration = 0.8, className = '' }) {
    const textVariants = {
        hidden: { y: "120%" },
        visible: { 
            y: 0, 
            transition: { 
                duration, 
                delay, 
                ease: [0.25, 0.1, 0.25, 1] 
            } 
        }
    };

    return (
        <motion.span 
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ 
                overflow: 'hidden', 
                display: 'inline-flex',
                verticalAlign: 'baseline',
            }}
        >
            <motion.span
                variants={textVariants}
                style={{ 
                    display: 'inline-block',
                    paddingBottom: '0.1em',
                    marginBottom: '-0.1em'
                }}
            >
                {children}
            </motion.span>
        </motion.span>
    );
}
