import { combineReducers } from "@reduxjs/toolkit";
import { gameQueryReducer } from "./gameQueryStore";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const reducer = combineReducers({
  gameQuery: gameQueryReducer,
});

export const useTypedSelector: TypedUseSelectorHook<
  ReturnType<typeof reducer>
> = useSelector;
