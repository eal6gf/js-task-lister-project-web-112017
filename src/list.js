/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      this.id = id++;
      this.title = title;
      this.tasks = {};
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
    }

    addTask(task){
      this.tasks[task.id] = task
    }
  }

})()
