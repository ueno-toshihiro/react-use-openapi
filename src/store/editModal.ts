import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Actions = {
  openModal: () => void;
  closeModal: () => void;
};

export const editModalStore = create<State & Actions>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
