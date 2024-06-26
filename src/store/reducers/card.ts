import { Action } from '../../components/Gallery/styles'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home/index'

type CardState = {
  items: Game[]
}

const initialState: CardState = {
  items: []
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cardSlice.actions
export default cardSlice.reducer
