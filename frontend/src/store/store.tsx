import { create } from 'zustand';
import api from '../api/api';

interface User {
  id: number;
  username: string;
  email: string;
  // Add other user properties as needed
}

interface UserStore {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  createContent: (contentData: any) => Promise<void>; // New function
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  fetchUser: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get('/profile'); // Adjust the API endpoint as needed
      console.log(response.data);
      set({ user: response.data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: 'Failed to fetch user data' });
    }
  },
  updateUser: async (userData) => {
    set({ isLoading: true });
    try {
      const response = await api.put('/profile', userData); // Adjust the API endpoint as needed
      set({ user: response.data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: 'Failed to update user data' });
    }
  },
  createContent: async (contentData) => {
    set({ isLoading: true });
    try {
      const response = await api.post('/content', contentData); // Adjust the API endpoint as needed
      set({ isLoading: false, error: null });
      return response.data; // Return the created content data
    } catch (error) {
      set({ isLoading: false, error: 'Failed to create content' });
      throw error; // Rethrow the error for handling in the component
    }
  },
}));

export default useUserStore;
