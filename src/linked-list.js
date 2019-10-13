const Node = require('./node');

class LinkedList {
    constructor() {
        this._tail = this._head;
        this._head = this._tail;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let node = this._head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node.data;
    }

    insertAt(index, data) {
        let nextNode = this._head;
        for (let i = 0; i < index; i++) {
            nextNode = nextNode.next;
        }
        if (nextNode) {
            let previousNode = nextNode.prev;
            let node = new Node(data, previousNode, nextNode);
            if (previousNode) {
                nextNode.prev = node;
                previousNode.next = node;
            }
        } else {
            let node = new Node(data, null, null);
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this._head == null) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (!this.isEmpty()) {
            let deleteNode = this._head;
            for (let i = 0; i < index; i++) {
                deleteNode = deleteNode.next;
            }
            let previousNode = deleteNode.prev;
            if (previousNode) {
                let nextNode = deleteNode.next;
                previousNode.next = nextNode;
                nextNode.prev = previousNode;
            } else {
                this._head = deleteNode.next;
            }
            this.length--;
        }
        return this;
    }

    reverse() {
        let current = this._head;
        for (let i = 0; i < this.length; i++) {
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = temp;

        }
        let listTemp = this._head;
        this._head = this._tail;
        this._tail = listTemp;
        return this;
    }

    indexOf(data) {
        let position = 0;
        let current = this._head;
        while (true) {
            if (current.data === data) {
                return position;
            }
            if (!current.next) {
                return -1;
            }
            current = current.next;
            position++;
        }
    }
}

module.exports = LinkedList;
