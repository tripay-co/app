import { create } from "zustand"



interface ConsultProcessStore {
   isOpen: boolean;
   open: () => void;
   close: () => void;
}

export const useOpenConsultProcessModal = create<ConsultProcessStore>(set => ({
   isOpen: false,
   open: () => set({ isOpen: true }),
   close: () => set({ isOpen: false }),
}))

