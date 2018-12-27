module.exports= class Task{
    // LAS CLASES SE DEFINEN CON LA PRIMERA LETRA EN MAYUSCULA

    static STATUS_PENDING(){
        return 0
    }
    static STATUS_IN_PROGRESS(){
        return 1
    }
    static STATUS_DONE(){
        return 2
    }

    constructor(){
        this.description=''
        this.status=0
        this.createdAt= new Date
    }

    setStatus(s){
        this.status=s
    }

    is(status){
        return this.status===status
    }

}