module.exports = class TaskList{
    // LAS CLASES SE DEFINEN CON LA PRIMERA LETRA EN MAYUSCULA
    
    constructor(){
        this.tasks=[]
    }
    add(task){
        this.tasks.push(task)
    }

    delete(){

    }

    

    toString(){
        return `
        <ul>
        </ul>`
    }
}