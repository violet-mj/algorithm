const linkedlistnode = require('./linkedlistNode')

class doubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // 맨 앞에 노드를 추가함
    prepend(value) {
        const newNode = new linkedlistnode(value, this.head)

        if(this.head) {
            this.head.previous = newNode
        }
        this.head = newNode

        if(!this.tail) {
            this.tail = newNode
        }

        return this
    }

    // 맨 뒤에 노드를 추가함
    append(value) {
        const newNode = new linkedlistnode(value)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode

            return this
        }

        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode

        return this

    }
    // 링크드리스트의 노드를 삭제한다. 
    delete(value) {
        if(!this.head) return this

       let deletedNode = null
       let tmp = this.head

        while(tmp) {
            if(tmp.value === value) {
                deletedNode = tmp
                if(tmp === this.head) {

                    this.head = deletedNode.next
                    
                    if(this.head) {
                        this.head.previous = null
                    }

                    
                } else if(tmp === this.tail) {
                    this.tail = deletedNode.previous
                    if(this.tail) {
                        this.tail.next = null
                    }
                } else {
                    let previousNode = deletedNode.previous
                    let nextNode = deletedNode.next

                    previousNode.next = nextNode
                    nextNode.previous = previousNode

                }
            }

            tmp = tmp.next
        }

        return deletedNode
    }

    // 링크드리스트의 노드를 순회한다.
    travel() {
        if(!this.head) {
            return 'linkedlist have not node'
        }

        let currentNode = this.head

        while(currentNode) {
            process.stdout.write(`${currentNode.value} => `)
            currentNode = currentNode.next
        }

    }
}

// const linklist = new doubleLinkedList()

// linklist.append(1)
// linklist.append(2)
// linklist.append(3)
// linklist.append(4)
// linklist.delete(3)
// linklist.prepend(23)
// linklist.travel()

module.exports = doubleLinkedList