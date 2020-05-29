function balancedBrackets(string) {
    let stack = []
    let str = string.split('')
    let len = str.length
    let bracketsMap = {
        "[": "]",
        "(": ")",
        "{": "}",
        "|": "|"
    }
    for (let i = 0; i < len; i++) {
        let bracket = str[i]
        if (bracketsMap[bracket]) stack.push(bracketsMap[bracket])
        else {
            stack.pop()
        }
    }

    return stack.length === 0
}