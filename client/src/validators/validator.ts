interface IField {
    [propName: string]: any;
}


export class Validator {

    public fields: IField;

    constructor(fields: IField) {
        this.fields = fields;

        for (let key in this.fields) {
            this.fields[key]=' ';
            Object.defineProperty(this, key, {
                get: () => {
                    // return this.fields != null ? this.fields[key] : null
                    return this.fields[key];
                },
                set:(value:any)=>
                {
                    // if(this.fields!=null)
                    // {
                    //     this.fields[key]=value;
                    // }
                    this.fields[key]=value;
                }
            })
            // Object.defineProperty(this,`${key}.touched`,{
            //     value:null
            // })
        }
    }
    public requiredOnBlur(e: any): void {
        // return (e.target['value'].length > 0 ? true : false)
        this.fields[e.target.name]=e.target.value;
    }

    public requiredOnChnage(e: any): void {
        // return (e.target['value'].length > 0 ? true : false)
        this.fields[e.target.name]=e.target.value;
    }
}

// export const validator = new Validator(null);