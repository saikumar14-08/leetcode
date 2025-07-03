var Node = function(val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;
    else {
        let curr = this.head;
        for(let i=0;i<index;i++) {
            curr = curr.next;
        }
        return curr.val;
    }  
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    if(this.size === 0) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    // if(this.size === 0) return this.addAtHead(val);
    if(!this.head) this.head = node;
    else {
        let curr = this.head;
        while(curr.next!=null) {
            curr = curr.next;
        }
        curr.next = node;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = new Node(val);
    if(index > this.size || index < 0) return;
    if(index === 0) return this.addAtHead(val);
    else if(index === this.size) return this.addAtTail(val);
    else {
        let curr = this.head;
        for(let i=0;i<index-1;i++) {
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;
    else if(index === 0) this.head = this.head.next;
    else {
        let curr = this.head;
        for(let i=0;i<index-1;i++) curr = curr.next;
        if(index === this.size) curr.next = null;
        else curr.next = curr.next.next;
    }
    this.size--;
    // else if(index === this.size) {
    //     this.next = null; 
    //     this.size--;
    // } else {
    //     let curr = this.head;
    //     for(let i=0;i<index-1;i++) {
    //         curr = curr.next;
    //     }
    //     curr.next = curr.next.next;   
    //     this.size--;
    // }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */