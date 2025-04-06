import { useTypingEffect } from "../../Hooks/useTypingEffect";

interface AnimatedTextProps {
    text: string;
    className?: string;
}

export default function AnimatedText({ text = "", className = "" }: AnimatedTextProps) {
    const displayText = useTypingEffect(text || "");

    return (
        <h1 className={`inline-block ${className}`}>
            {displayText}
            <span className="ml-1 inline-block w-0.5 h-5 bg-fuchsia-900 dark:bg-fuchsia-950 animate-blink"></span>
        </h1>
    );
}
