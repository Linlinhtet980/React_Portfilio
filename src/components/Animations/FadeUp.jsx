import { motion } from 'framer-motion';

export default function FadeUp({ children, delay = 0, duration = 0.6, className = '', staggerChildren = false, as = 'div', ...props }) {
    const Component = motion[as] || motion.div;
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration, 
                delay, 
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: staggerChildren ? 0.1 : 0
            } 
        }
    };

    return (
        <Component
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
}
