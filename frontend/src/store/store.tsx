import { create } from 'zustand';
import api from '../api/api';

interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  name: string;
  // Add other user properties as needed
}

export interface ContentItem {
  _id: string;
  userId: string;
  title: string;
  description: string;
  img: string[];
  email: string;
  name: string;
  avatar: string;
  uploadDate: string;
  __v: number;
}

interface UserStore {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  createContent: (contentData: any) => Promise<void>;
  contentItems: ContentItem[]; // New property to store content items
  getContent: () => Promise<void>;
  getAllContent: () => Promise<void>;
  allcontentItems: ContentItem[]; // New property to store all content items
  
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  contentItems: [], // Initialize contentItems
  allcontentItems: [], // Initialize allcontentItems
  fetchUser: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get('/profile'); // Adjust the API endpoint as needed
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
      const response = await api.post('/upload', contentData);
      set((state) => ({ 
        isLoading: false, 
        error: null, 
        contentItems: [...state.contentItems, response.data] 
      }));
    } catch (error) {
      set({ isLoading: false, error: 'Failed to create content' });
      throw error;
    }
  },
  getContent: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get('/content');
      console.log(response);
      set({ contentItems: response.data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: 'Failed to fetch content' });
    }
  },
  getAllContent: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get('/allcontent');
      set({ allcontentItems: response.data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: 'Failed to fetch content' });
    }
  },
}));

export default useUserStore;
