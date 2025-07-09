import { create } from "zustand"


interface SendMessageModalArgsType {
   isOpen: boolean;
   name: string | null;
   phone: string | null;
   open: () => void;
   close: () => void;
   setName: (name: string) => void;
   setPhone: (phone: string) => void;
}

export const useSendMessageModalStore = create<SendMessageModalArgsType>((set) => ({
   isOpen: false,
   name: null,
   phone: null,
   open: () => set({ isOpen: true }),
   close: () => set({ isOpen: false }),
   setName: (name: string) => {
      set({ name: name })
   },
   setPhone: (phone: string) => {
      set({ phone: phone })
   },
})) 