
const linkedlist = require('../linkedlist/linkedlist')

class Queue {
    constructor() {
        this.linkedlist = new linkedlist()
    }

    isEmpty() {
        return !this.linkedlist.head
    }

    peek() {
        return this.linkedlist.head
    }

    enqueue(value) {
        return this.linkedlist.prepend(value)
    }

    dequeue() {
        const removeHead = this.linkedlist.delete(this.linkedlist.head.value)
        return removeHead ? removeHead.value : null
    }

    travelQueue() {
        this.linkedlist.travel()
    }

}

const queue = new Queue()

queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue()
queue.travelQueue()


module.export = Queue