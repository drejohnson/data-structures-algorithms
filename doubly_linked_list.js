class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    // append
    // adds to the end of list (tail)
    append(value) {
        // if list is empty
        // set head and tail to new node value
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            // assign current tail to varaible
            let prevTail = this.tail
            // set new tail to new node value
            this.tail = new Node(value)
            // point old tail to new tail
            prevTail.next = this.tail
            // point new tail to previous tail
            this.tail.prev = prevTail
        }

        this.length++
    }

    // prepend
    // adds to the beginning of list (head)
    prepend(value) {
        // if list is empty
        // set head and tail to new node value
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            // assign current head
            let prevHead = this.head
            // set new head to new node value
            this.head = new Node(value)
            // point old head to new head
            prevHead.prev = this.head
            // point new head to previous head
            this.head.next = prevHead
        }

        this.length++
    }

    // deleteHead
    deleteHead() {
        // if list is empty
        // return null if empty
        // else capture head and return it
        if (!this.head) {
            return null
        } else {
            let removedHead = this.head
            // if list has 1 node
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                // remove prev pointer
                this.head.prev = null
            }

            this.length--
            return removedHead
        }
    }

    // deleteTail
    deleteTail() {
        // if list is empty
        // return null if empty
        // else capture tail and return it
        if (!this.tail) {
            return null
        } else {
            let removedTail = this.tail

            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev
                // remove pointer to next node
                this.tail.next = null
            }

            this.length--
            return removedTail
        }
    }

    // search
    search(value) {
        // keep track of current node
        // starting at the head
        let currentNode = this.head

        while (currentNode) {
            // check if current node value === value passed in
            // if true, return current node
            if (currentNode.value === value) return currentNode

            // current node value doesn't match value passed in
            // set current node to the next node in list
            currentNode = currentNode.next
        }

        // return null if value not found
        return null
    }

    // size
    size() {
        return this.length
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend(0)
list.prepend(-1)

list.search(1)
list.search(3)
console.log(list.search(999))
console.log(list.size())

// list.deleteHead()
// list.deleteTail()
// list.deleteTail()
// list.deleteTail()
// list.deleteTail()

list