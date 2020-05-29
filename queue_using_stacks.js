// implement Queue abstract data type in javascript using two stacks

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
        let removed = this.storage[this.length]
        delete this.storage[this.length]
        this.length--
        return removed
    }

    // peek
    peek() {
        return this.storage[this.length]
    }

    size() {
        return this.length
    }
}

class Queue {
    constructor() {
        this.pushStack = new Stack()
        this.popStack = new Stack()
    }

    // enqueue
    enqueue(item) {
        this.pushStack.push(item)
    }

    // dequeue
    dequeue() {
        if (this.popStack.size() === 0) {
            if (this.pushStack.size() === 0) { return 'Cannot dequeue because queue is empty'; }
            while (this.pushStack.size() > 0) {
              let pop = this.pushStack.pop();
              this.popStack.push(pop);
            }
        }
        return this.popStack.pop();
    }

    // peek
    peek() {
        if (this.popStack.size() < 1) {
            while (this.pushStack.size() > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }

        return this.popStack.peek()
    }

    size() {
        return this.popStack.size() + this.pushStack.size()
    }

    // empty
    empty() {
        return this.popStack.size() + this.popStack.size()  === 0
    }
}

let queue = new Queue()

queue.enqueue('Hendrix')
queue.enqueue('Dylan')
queue.enqueue('Shani')
queue.enqueue('Mecca')

// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()

console.log(queue.size())

console.log(queue.peek())
console.log(queue.empty())

queue