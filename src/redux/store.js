import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./auth/authReducer";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import contacts from "./contacts/reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const persistConfig = {
  key: "auth",
  storage,
  whiteList: ["tokens"]
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  contacts
});

const store = configureStore({
  reducer: rootReducer,
  middleware
});

persistStore(store);

export default store;
