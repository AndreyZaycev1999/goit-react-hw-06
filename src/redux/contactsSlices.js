import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items: []
}

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "items",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
        state.items.push(action.payload);
        // Перетворюється в іммутабельний код, тому в данному вигляді його можна використовувати
    },
    deleteContact(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;