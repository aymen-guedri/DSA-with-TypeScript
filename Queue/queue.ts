type QNode<T> = {
    value: T,
    next?: QNode<T>
};

export default class Queue<T>{
    private length:number
    private head?: QNode<T>
    private tail?:QNode<T>

    constructor(){
        this.head= this.tail= undefined
        this.length=0
    }
    enqueue(item:T):void{
        this.length++;
        if (!this.tail) {
            this.tail=this.head={value:item} as QNode<T>
        }
        const newTail = {value:item} as QNode<T>
        this.tail.next= newTail;
        this.tail= newTail

    }
    deque():T | undefined{
       if(!this.head){
        return undefined;
       } 
       this.length--;
       const head = this.head;
       this.head = this.head.next;
       return head.value;
    }
    peek():T | undefined{
        return this.head?.value
    }
}