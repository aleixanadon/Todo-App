import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../interfaces/Item";
import { v4 as uuidv4 } from "uuid";
import type { RootState } from "../store";

interface ItemState {
  value: Item[];
}

const initialState: ItemState = {
  value: [],
};

// for (let i = 0; i<1; i++) {
//   initialState.value.push(
//     {
//       id: uuidv4(),
//       text: `item ${i}`,
//       date: new Date(),
//       isDone: false,
//     },
//   )
// }

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<string>) => {
      const actualArr = state.value;
      const date = new Date();
      const newItem: Item = {
        id: uuidv4(),
        text: action.payload,
        date: date,
        isDone: false,
      };
      const newArr = [...actualArr, newItem];
      state.value = newArr;
    },
    remove: (state, action: PayloadAction<string>) => {
      const actualArr = state.value;
      const filteredArr = actualArr.filter(
        (item) => item.id !== action.payload
      );
      state.value = filteredArr;
    },
    update: (state, action: PayloadAction<Item>) => {
      const { id } = action.payload;
      const itemToUpdate = state.value.find((e) => e.id === id);
      // state.value.forEach((e) => console.log(e))
      // console.log(itemToUpdate)
      if (itemToUpdate) {
        const newArr = state.value.map((item) =>
          item.id === id ? { ...action.payload } : item
        );
        state.value = newArr;
      }
    },
  },
});

export const { insert, update, remove } = itemSlice.actions;

export const selectItems = (state: RootState) => state.items.value;

export default itemSlice.reducer;
