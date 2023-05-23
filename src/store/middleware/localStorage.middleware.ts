// https://stackoverflow.com/a/68421466
import { Middleware } from '@reduxjs/toolkit';
import { saveToLocalStorage } from 'utils';

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    const affectedSliceName = action.type.split('/')[0];
    const affectedState = store.getState()[affectedSliceName];

    for (const key in affectedState) {
      if (Object.prototype.hasOwnProperty.call(affectedState, key)) {
        const value = affectedState[key];
        saveToLocalStorage(key, value);
      }
    }

    return result;
  };