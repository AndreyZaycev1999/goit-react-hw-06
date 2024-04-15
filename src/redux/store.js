import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlices";
import { filtersReducer } from "./filtersSlices";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["contacts"],
}

export const store = configureStore({
    reducer: {
        contact: persistReducer(contactsPersistConfig, contactsReducer),
        filter: filtersReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});

export const persistor = persistStore(store);