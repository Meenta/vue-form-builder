/**
 * Check if the user checked the age, the value of the field must be an object with verifyAge option as boolean.
 * @param {obj} { date: string, verifyAge: boolean }
 * @return {boolean}
 */
 export default function isRegexPassed(fieldValue) {
    return fieldValue.verifyAge;
}