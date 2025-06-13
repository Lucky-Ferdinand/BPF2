import axios from 'axios'

const API_URL = "https://gcscuendapisdleyopwl.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjc2N1ZW5kYXBpc2RsZXlvcHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzIwNDEsImV4cCI6MjA2NTM0ODA0MX0.XjWCXMW_80P8R-A4cvuG0BBRepM6CJsuLbv2Xa7TMf8"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },

    async updateNote(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers })
        return response.data
    }
}
