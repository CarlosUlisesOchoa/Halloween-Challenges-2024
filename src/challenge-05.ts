export function escapePyramidHead(room: string[][]): number {
  const gridSize = room.length;
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ];

  let pyramidRow = -1,
    pyramidCol = -1;
  let playerRow = -1,
    playerCol = -1;

  // Find positions of '▲' (Pyramid Head) and 'T' (player)
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = room[row][col];
      if (cell === "▲") {
        pyramidRow = row;
        pyramidCol = col;
      } else if (cell === "T") {
        playerRow = row;
        playerCol = col;
      }
      // If we found both positions, exit the loop
      if (pyramidRow !== -1 && playerRow !== -1) {
        break;
      }
    }
    if (pyramidRow !== -1 && playerRow !== -1) {
      break;
    }
  }

  // Verify that both positions were found
  if (pyramidRow === -1 || playerRow === -1) {
    return -1;
  }

  // Use a one-dimensional array for visited cells
  const visited = new Array(gridSize * gridSize).fill(false);
  visited[pyramidRow * gridSize + pyramidCol] = true;

  // Queue for BFS: [row, column, steps]
  const queue = [[pyramidRow, pyramidCol, 0]];
  let head = 0;

  while (head < queue.length) {
    const [currentRow, currentCol, steps] = queue[head++];

    // Check if we've reached the player
    if (currentRow === playerRow && currentCol === playerCol) {
      return steps;
    }

    // Explore all four directions
    for (const [dRow, dCol] of directions) {
      const newRow = currentRow + dRow;
      const newCol = currentCol + dCol;
      const index = newRow * gridSize + newCol;

      // Check boundaries and conditions
      if (
        newRow >= 0 &&
        newRow < gridSize &&
        newCol >= 0 &&
        newCol < gridSize &&
        room[newRow][newCol] !== "#" &&
        !visited[index]
      ) {
        visited[index] = true;
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }

  // If player cannot be reached
  return -1;
}
