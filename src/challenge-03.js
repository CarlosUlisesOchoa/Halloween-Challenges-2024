"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSafestPath = findSafestPath;
function findSafestPath(dream) {
    const numRows = dream.length;
    const numCols = dream[0].length;
    // Initialize a 1D DP array
    const dp = Array(numCols).fill(0);
    // Initialize the first cell
    dp[0] = dream[0][0];
    // Initialize the first row with cumulative sums
    for (let m = 1; m < numCols; m++) {
        dp[m] = dp[m - 1] + dream[0][m];
    }
    // Iterate through the rest of the rows
    for (let n = 1; n < numRows; n++) {
        // Update the first cell in the current row (only can come from above)
        dp[0] += dream[n][0];
        // Iterate through the columns, starting from the second column
        for (let m = 1; m < numCols; m++) {
            // The current cell's danger is the minimum of coming from the left or above
            dp[m] = Math.min(dp[m], dp[m - 1]) + dream[n][m];
        }
    }
    // The last element in dp contains the minimum danger value to reach the bottom-right corner
    return dp[numCols - 1];
}
