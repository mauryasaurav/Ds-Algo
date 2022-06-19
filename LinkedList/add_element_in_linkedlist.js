class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class InsertNode {

    constructor() {
        this.head = null
    }

    insertElementInLinkedKist(data) {
        let newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            return this.head;
        }

        let addNewElement = this.head;

        while(addNewElement.next != null) {
            addNewElement = addNewElement.next;
        }

        console.log(addNewElement.next)
        addNewElement.next = newNode;
        return addNewElement
    }

}

let linkedList = new InsertNode()
linkedList.insertElementInLinkedKist(20)
linkedList.insertElementInLinkedKist(20)
linkedList.insertElementInLinkedKist(40)


console.log(linkedList)
