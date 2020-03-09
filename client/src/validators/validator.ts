class Validator {
    public requiredOnBlur(e: any): boolean {
        return (e.target['value'].length > 0 ? true : false)
    }

    public requiredOnChnage(e: any): boolean {
        return (e.target['value'].length > 0 ? true : false)
    }
}

export const validator = new Validator();