import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../interfaces/Item";
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from "../store";

interface ItemState {
  value: Item[]
}

const initialState: ItemState = {
  value: [
    // {
    //   id: uuidv4(),
    //   text: "item 1",
    //   date: new Date(),
    // }
  ]
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<string>) => {
      const actualArr = state.value
      const date = new Date()
      const newItem: Item = { id: uuidv4(), text: action.payload, date: date }
      const newArr = [...actualArr, newItem]
      state.value = newArr
    },
    remove: (state, action: PayloadAction<string>) => {
      const actualArr = state.value;
      const filteredArr = actualArr.filter((item) => item.id !== action.payload);
      state.value = filteredArr;
    }   
  }
})

export const { insert, remove } = itemSlice.actions

export const selectItems = (state: RootState) => state.items.value 

export default itemSlice.reducer