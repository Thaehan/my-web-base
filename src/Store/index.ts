import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, PersistConfig, persistStore } from "redux-persist";

import SystemSlice from "Store/Slices/SystemSlice";

const persistConfig: PersistConfig<any> = {
  key: "root",
  version: 1,
  storage: storage,
  blacklist: [],
  whitelist: ["system"],
};

const combinedReducer = combineReducers({
  system: SystemSlice,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

const typeStore = configureStore({ reducer: combinedReducer });

export { store, persistor };
export type IRootState = ReturnType<typeof typeStore.getState>;
