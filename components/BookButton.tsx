"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";

export default function BookButton({ title }: { title: string }) {
    const { openModal } = useModal();

    return (
        <Button
            size="lg"
            className="w-full h-12 text-lg"
            onClick={() => openModal(`Halo, saya mau booking ${title}. Mohon infonya.`)}
        >
            Book via WhatsApp
        </Button>
    );
}
