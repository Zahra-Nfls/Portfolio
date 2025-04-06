import { useEffect, useState } from "react";

export function useTypingEffect(text: string, speed = 150, pause = 1000): string {
    const [displayText, setDisplayText] = useState("");

    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? speed / 2 : speed;

        const handleTyping = setTimeout(() => {
            setDisplayText(prev =>
                isDeleting
                    ? text.substring(0, prev.length - 1)
                    : text.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === displayText) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
            }
        }, typeSpeed);

        return () => clearTimeout(handleTyping);
    }, [displayText, isDeleting, text, speed, pause]);

    return displayText;
}
