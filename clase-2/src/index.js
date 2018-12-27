let Task= require('./Task')
let TasksList=require('./TasksLists')

let firstTask = new Task

firstTask.description='ir al curso'
firstTask.setStatus(Task.STATUS_PENDING)

console.log(firstTask.is(Task.STATUS_DONE()))

let tasksList = new TasksList
tasksList.add(firstTask)

console.log()