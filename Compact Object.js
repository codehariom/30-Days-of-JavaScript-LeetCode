// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.


// code 

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        // If the input is an array, recursively compact each element
        return obj
            .map(compactObject) // Recursively process elements
            .filter(Boolean);   // Remove falsy values
    } else if (typeof obj === "object" && obj !== null) {
        // If the input is an object, recursively compact each property
        const result = {};
        for (const key in obj) {
            const value = compactObject(obj[key]); // Recursively process values
            if (Boolean(value)) {                 // Add only truthy values
                result[key] = value;
            }
        }
        return result;
    }
    // For primitive values, return as-is
    return obj;
};
