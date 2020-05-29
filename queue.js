// implement Queue data structure in javascript

class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    // enqueue
    enqueue(item) {
        this.storage[this.tail] = item
        this.tail++
    }

    // dequeue
    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

let queue = new Queue()

queue.enqueue('Hendrix')
queue.enqueue('Dylan')
queue.enqueue('Shani')
queue.enqueue('Mecca')

queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(queue)