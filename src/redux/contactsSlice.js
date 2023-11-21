import { createSlice, createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const refreshFilter = createAction('contacts/refreshFilter');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addContact, (state, action) => {
        return [action.payload, ...state];
      })
      .addCase(deleteContact, (state, action) => {
        return state.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { reducer: contactsReducer } = contactsSlice;