import { create } from 'zustand';
import type { User } from '../api/users.schemas';

type State = {
  user: User;
};

type UpdateUserArgument = {
  name: User['name'];
  email: User['email'];
};

type Actions = {
  setSelectedUser: (user: User) => void;
};

export const userStore = create<State & Actions>((set, get) => ({
  user: {} as User,
  setSelectedUser: (user: User) => set({ user }),
}));

// 使い方
// const selectedUser = useUsersStore((state) => state.user);
// const setSelectedUser = useUsersStore((state) => state.setSelectedUser);
