class myArray {
  constructor(){
    this.data ={};
    this.length = 0;
  }

  get(index){
    return this.data[index]
  }

  push(item){
    this.data[this.length]= item;
    this.length++;
    return this.data
  }

  pop(){
    delete this.data[this.length-1];
    this.length--;
  }

  delete(index){
    const item = this.data[index];
    for(let i=index;i<this.length-1;i++){
      this.data[i]=this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--;
    
  }
}

const arr1 = new myArray;
arr1.get(0)
arr1.push('1')
arr1.push('jack')
arr1.push('helloWorld')
arr1.delete(1)
console.log(arr1) 
