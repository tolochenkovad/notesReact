import React from 'react';
import localeReducer, {changeLocale} from "./localereducer";

it ('locale must be ru', () => {
    let action = changeLocale('ru');
    let state = {
        locale: 'en'
    };
    let newState = localeReducer(state, action);
    expect(newState.locale).toBe('ru');
});