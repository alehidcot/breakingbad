// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// This disables the warning messages from CommonUX globally for all tests
// TODO: Either we update the CommonUX library or we wrap it somehow to avoid such messages in the future
jest.spyOn(console, "warn").mockImplementation(() => { })
