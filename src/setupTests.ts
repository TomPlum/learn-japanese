// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Fixes an issue with useAsyncDebounce from the react-table library.
// It fixes the 'regeneratorRuntime is not defined` error when running a test that consumes the function.
import 'regenerator-runtime/runtime';

//Test Environment
import dotenv from 'dotenv';
dotenv.config({path: './.env.test'});

//Fixes Jest error.
//See: https://github.com/akiran/react-slick/issues/742#issuecomment-298992238
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

//Allows testing of components that are wrapped in the sizeMe HOC
import sizeMe from "react-sizeme";
sizeMe.noPlaceholders = true;

//Custom Jest assertion for testing CSS styles
expect.extend({
    toHaveStyleProperty(received, style, value) {
        const hasStyle = received.toHaveProperty('style._values.' + style, value);
        if (hasStyle) {
            return {
                message: () => `${received} has the style ${style} with value ${value}.`,
                pass: true
            }
        } else {
            return {
                message: () => `${received} does not have the style ${style}.`,
                pass: false
            }
        }
    }
});

//Mocks local storage for testing
export const localStorageMock = (function() {
    let store = new Map()
    return {
        getItem(key: string):string {
            return store.get(key);
        },

        setItem: function(key: string, value: string) {
            store.set(key, value);
        },

        clear: function() {
            store = new Map();
        },

        removeItem: function(key: string) {
            store.delete(key)
        }
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
