type BinaryNode<T> = {
    value: T;
    left?: BinaryNode<T> | null;
    right?: BinaryNode<T> | null;
};

export default function bfs(head:BinaryNode<number>, needle:number):boolean{
    const q: (BinaryNode<number> | null)[] = [head];

    while(q.length){
        const curr =q.shift() as BinaryNode<number> | undefined | null;
        // search
        if(curr?.value===needle){
            return true;
        }
        if (curr && curr.left) {
            q.push(curr.left);
        }
        if (curr && curr.right) {
            q.push(curr.right);
        }
    }
    return false;
}