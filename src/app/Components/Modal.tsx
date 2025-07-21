    // components/Modal.tsx
    "use client";

    import React, { useEffect } from "react";

    interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    }

    export default function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }

        return () => {
        document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
        {/* Black Blur Overlay */}
        <div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        />
        
        {/* Modal Content */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
                ✕
            </button>
            {children}
            </div>
        </div>
        </>
    );
    }
