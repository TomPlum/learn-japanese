// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

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
})