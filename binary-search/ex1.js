"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = binary_search;
function binary_search(haystack, needle) {
    var low = 0;
    var hight = haystack.length;
    do {
        var m = Math.floor(low + (hight - low) / 2);
        var v = haystack[m];
        if (v === needle) {
            return true;
        }
        else if (v > needle) {
            hight = m;
        }
        else {
            low = m + 1;
        }
    } while (low < hight);
    return false;
}
