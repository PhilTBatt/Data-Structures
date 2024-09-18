const stackPrototype = {
    push: function (item) {
        if (this.quantity < this.maxSize) {
            this.storage[this.currentIndex] = item
            this.currentIndex++
            this.quantity++
        }
    },
    pop: function () {
        if (this.quantity > 0) {
            this.currentIndex--
            this.quantity--
            let pop = this.storage[this.currentIndex]
            delete this.storage[this.currentIndex]
            return pop
        }
    },
    isEmpty: function() {
        return this.quantity === 0
    },
    isFull: function () {
        return this.quantity === this.maxSize
    },
    peak: function() {
        if (this.quantity > 0) {return this.storage[this.currentIndex-1]}
    }
}

function createStack(maxSize=1) {
    let stack = Object.create(stackPrototype)
    stack.storage = {}
    stack.quantity = 0
    stack.currentIndex = 1
    return stack
}