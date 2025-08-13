import axios from "axios";

// const API_BASE_URL = "http://localhost:3000/api";  
const API_BASE_URL = "https://whatsapp-web-clone-s52h.onrender.com/api";  

export const fetchConversations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching conversations:", error);
    throw error;
  }
};

export const sendMessage = async (wa_id, text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/messages`, {
      wa_id,
      text,
    });
    return response.data; 
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
