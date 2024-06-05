// https://leetcode.com/problems/greatest-common-divisor-of-strings/submissions/1278865740/?envType=study-plan-v2&envId=leetcode-75

// --------------------------------------------------------------------------------------------------

function gcd(a,b){
    while (b !== 0){
        [a,b] = [b, a % b];
    }
    return a;
 }


var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1){
        return "";
    }
    else{
        const gcdLength = gcd(str1.length, str2.length);
        return str1.substring(0, gcdLength);
    }
};