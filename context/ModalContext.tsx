"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import LeadFormModal from "@/components/LeadFormModal";

interface ModalContextType {
    openModal: (message?: string) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [defaultMessage, setDefaultMessage] = useState("");

    const openModal = (msg?: string) => {
        setDefaultMessage(msg || "");
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <LeadFormModal isOpen={isOpen} onClose={closeModal} defaultMessage={defaultMessage} />
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used within a ModalProvider");
    return context;
};
