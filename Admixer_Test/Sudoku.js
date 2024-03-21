function validSolution(board) {
    // Перевірка рядків
    for (let row = 0; row < 9; row++) {
        let rowSet = new Set();
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0 || rowSet.has(board[row][col])) {
                return false;
            }
            rowSet.add(board[row][col]);
        }
    }

    // Перевірка стовпчиків
    for (let col = 0; col < 9; col++) {
        let colSet = new Set();
        for (let row = 0; row < 9; row++) {
            if (board[row][col] === 0 || colSet.has(board[row][col])) {
                return false;
            }
            colSet.add(board[row][col]);
        }
    }

    // Якщо всі перевірки пройдені, то дошка є правильним розв'язком
    return true;
}

// Приклад використання
const boardTrue = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);

const boardFalse = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]);


console.log(boardTrue); // Повинно вивести true, це правильний розв'язок
console.log(boardFalse); // Повинно вивести false, це не правильний розв'язок
