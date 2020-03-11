interface IField {
    [propName: string]: any;
}

interface TField {
    [propName: string]: any
}


export class Validator {

    public fields: IField;
    public touchedField: any = [];

    constructor(fields: any) {
        this.fields = fields;

        for (let key in this.fields) {
            // this.fields[key] = ' ';
            this.touchedField.push(null);
            // Object.defineProperty(this, key, {
            //     get: () => {
            //         // return this.fields != null ? this.fields[key] : null
            //         return this.fields[key];
            //     },
            //     set: (value: any) => {
            //         this.fields[key] = value;
            //     }
            // })
            // Object.defineProperty(this,`${key}`,{
            //     value:{"touched":false}
            // })
        }
    }
    public requiredOnBlur(e: any): void {
        // return (e.target['value'].length > 0 ? true : false)
        // this.fields[e.target.name] = e.target.value;
        this.fields[e.target.name].length > 0 ? this.touchedField[e.target.dataset.index] = true : this.touchedField[e.target.dataset.index] = false;
    }

    public requiredOnChnage(e: any): void {
        // return (e.target['value'].length > 0 ? true : false)
        this.fields[e.target.name] = e.target.value;
        this.fields[e.target.name].length > 0 ? this.touchedField[e.target.dataset.index] = true : this.touchedField[e.target.dataset.index] = false;
    }

    public confirmPassword(e: any): boolean {
        return this.fields['password'] === e.target.value ? false : true
    }

    public emptyForm(): void {
        for (let key in this.fields) {
            this.fields[key] = "";
        }
    }

    public isFormValid(): boolean {
        return (this.touchedField.includes(false) === true || this.touchedField.includes(null) === true ? true : false)
    }
}

// export const validator = new Validator(null);