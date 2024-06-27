import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home/index'

type CardState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CardState = {
  items: [],
  isOpen: false
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cardSlice.actions
export default cardSlice.reducer
