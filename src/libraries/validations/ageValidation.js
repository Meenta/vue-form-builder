/**
 * Check if the user checked the age
 * @param {obj} { date: string, verifyAge: boolean }
 * @return {boolean}
 */
 export default function isRegexPassed(fieldValue) {
	 console.log('ageValidations: ', fieldValue);
    return fieldValue.verifyAge;
}