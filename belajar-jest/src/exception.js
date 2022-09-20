export class MyException extends Error {

}

export const CallMe = (name) => {
    if(name === nanda){
        throw new MyException("kenapa error ?");
    }else {
        return "ok"
    }
}