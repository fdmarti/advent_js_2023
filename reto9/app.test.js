const adjustLights = require('./app')

describe('testing the adjust lights cases', () => {
    test('Case 1', () => {
        expect(adjustLights([true, false, true, true, true])).toBe(1);
    })
    test('Case 2', () => {
        expect(adjustLights([false, false, true, true, false])).toBe(2);
    })
    test('Case 3', () => {
        expect(adjustLights([true, false, true, false, true])).toBe(0);
    })
    test('Case 4', () => {
        expect(adjustLights([false, false, false])).toBe(1);
    })
    test('Case 5', () => {
        expect(adjustLights([false, false, false, false, false, false, false, false, false])).toBe(4);
    })
    test('Case 6', () => {
        expect(adjustLights([false])).toBe(0);
    })
    test('Case 7', () => {
        expect(adjustLights([false, false, true])).toBe(1);
    })
    test('Case 8', () => {
        expect(adjustLights([true, false, false, true, false, true, false, true, false])).toBe(2);
    })
    test('Case 9', () => {
        expect(adjustLights([true, false, false, true, false])).toBe(2);
    })
    test('Case 10', () => {
        expect(adjustLights([false, false, true, false, true])).toBe(1);
    })
    test('Case 11', () => {
        expect(adjustLights([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])).toBe(10);
    })
    test('Case 12', () => {
        expect(adjustLights([false, false, true, true])).toBe(2);
    })
})