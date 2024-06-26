class MyStack{
    constructor(capacity){
        this.capacity = capacity;
        this.items = [];
        this.top = -1;
        this.a = new Array(capacity);
    }

    push(data){
        if(this.top == this.capacity-1){
            throw new Error('Stack Overflow');
        }
        this.top++;
        this.a[this.top] = data;
    }

    pop(){
        if(this.top == -1){
            throw new Error('Stack Underflow');
        }
        const res = this.a[this.top];
        this.top--;
        return res;
    }

    peek(){
        if(this.top == -1){
            throw new Error('Stack Underflow');
        }
        return this.a[this.top];
    }

    isEmpty(){
        return this.top == -1;
    }
}

const stack = new MyStack(5);

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.pop());

// stack.push(40);

console.log(stack.peek());
console.log(stack.isEmpty());
