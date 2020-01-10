/**
 * @module - it will check for the two string are anagram or not
 * @param {String} value - value to be checked
 */
let inc=1.00;
exports.harmonicFunc=(value)=>{
    for(i=2;i<value;i++){
            inc+=1/i;
    }
    return inc;
}