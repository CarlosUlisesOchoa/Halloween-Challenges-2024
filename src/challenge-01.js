"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMagicPotion = createMagicPotion;
function createMagicPotion(potions, target) {
    // Code here
    if (!potions || potions.length < 2) {
        return undefined;
    }
    const map = new Map();
    for (let i = 0; i < potions.length; i++) {
        const complement = target - potions[i];
        if (map.has(complement)) {
            // If the complement exists, return the indices in the order they appear
            return [map.get(complement), i];
        }
        // Store the current potion and its index in the map
        map.set(potions[i], i);
    }
    return undefined;
}
