import { create } from "zustand"


interface StatusMessageModalArgsType {
   isOpen: boolean;
   open: () => void;
   close: () => void;
}

export const useStatusMessageModal = create<StatusMessageModalArgsType>((set) => ({
   isOpen: false,
   open: () => set({ isOpen: true }),
   close: () => set({ isOpen: false }),
})) 