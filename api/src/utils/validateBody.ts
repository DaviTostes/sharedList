export default function validateBody(obj: any) {
    for(let key in obj) {
        if(obj[key] === undefined) {
            return key
        }
    }
    return false
} 