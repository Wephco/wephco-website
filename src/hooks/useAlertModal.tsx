import { create } from 'zustand';

const useAlertModal = create((set) => ({
  isOpen: false,
  content: '',
  variant: '',
  setVariant: (text: string) => set({ variant: text }),
  setContent: (text: string) => set({ content: text }),
  clearModal: () => set({ isOpen: false, variant: '', content: '' }),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useAlertModal;
