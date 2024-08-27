import React, { ReactNode } from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
    text: string;
    children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
    return (
        <div className={styles.tooltip}>
            {children}
            <span className={styles.tooltiptext}>{text}</span>
        </div>
    );
}
