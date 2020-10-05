
export class OcxExceptions extends Error{
    public message: string;
    public name: string;
    public stack: string;
    public context: Array <string>;

    constructor(message: string, context: Array<string>){
        super(message)
        this.stack = (<any> new Error()).stack;
        this.context = context ? context : []
    }
}