var exist = function (board, word) {
    let match2 = []
    for (let i = 0; i < board.length + 1; i++) {
        for (var j = 0; j <= board[0].length; j++) {
            for (let s = 0; s < word.length + 1; s++) {
               if(board[i][j] === undefined) return;
                if (board[i][j] == word[s]) {
                    match2.push(board[i][j])
                }
            }
        }
    }
    console.log("s", match2)
    return match2
};

var exist = function (board) {
    let temp = 0
    for (let index = 0; index < board.length; index++) {
        for (let j = index; j < board.length; j++) {
            if (board[index] > board[j]) {
                temp = board[index]
                board[index] = board[j]
                board[j] = temp
            }
        }
    }
    console.log(board)
}
let bound = [2, 10, 7, 1, 3]
console.log(exist(bound))

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));