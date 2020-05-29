// Implement a stack data structure in javascript
// Stacks are (L)ast (I)n (F)irst (O)ut
class Stack {
    constructor() {
        this.storage = {}
        this.length = 0
    }

    // push
    // a method that adds an item to the stack
    push(item) {
        this.length++
        this.storage[this.length] = item
    }

    // pop
    // a method the removes the last item from the stack
    pop() {
        if (this.length === 0) return undefined
        let removed = this.storage[this.length]
        delete this.storage[this.length]
        this.length--
        return removed
    }

    // peek
    // return top element in stack
    peek() {
        return this.storage[this.length]
    }

    // isEmpty
    // check if stack is empty
    isEmpty() {
        return this.length === 0
    }

    // size
    // return the size of the stack
    size() {
        return this.length
    }

    // empty
    // clear all items from stack
    empty() {
        this.storage = {}
        this.length = 0
    }

    // print
    // console.log all items in stack
    print() {
        for (let i in this.storage) {
            console.log(this.storage[i])
        }
    }
}

let stack = new Stack()
console.log(stack.isEmpty())
stack.push('Hendrix')
// stack.push('Dylan')
// stack.push('Shani')
// stack.push('Mecca')
// stack.pop()
// stack.pop()
// stack.pop()
console.log(stack.peek())
stack.print()

stack