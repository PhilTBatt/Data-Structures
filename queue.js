const queuePrototype = {
    enQueue: function(item) {
        if (this.back - this.front < this.maxSize) {
            this.storage[this.back] = item;
            this.back++;
        }
    },
    dequeue: function() {
        if (this.front < this.back) { 
            const de = this.storage[this.front];
            delete this.storage[this.front];
            this.front++;
        }
    },
    getQuantity: function getQuantity() {
        return this.back - this.front;
    },
    isEmpty: function isEmpty() {
        return this.back - this.front === 0;
    },
    isFull: function isFull() {
        return this.back - this.front === this.maxSize;
    },
    peek: function peek() {
        return this.storage[this.front];
    }
}

function createQueue(maxSize=1) {
    const queue = Object.create(queuePrototype)
    queue.maxSize = maxSize
    queue.front = 0
    queue.back = 0
    queue.storage = {}
    return queue
}