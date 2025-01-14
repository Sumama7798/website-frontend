import {create} from 'zustand';
import toast from 'react-hot-toast';
import axios from '../lib/axios';


export const useCard = create((set) => ({
    cards: [],

    getCardsByAdress: async (page, section) => {
        
        try {
            const response = await axios.get(`/getCardsByAdress/${page , section}`);
            set({cards: response.data});
        } catch (error) {
            toast.error(error.message);
        }
    }
}));

