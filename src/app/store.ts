import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

//counterSlice  => chỉ slice của counter
import todolistReducer from '../features/todolist/todolistSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer, 
    todolist: todolistReducer,
  },
});

//type
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
