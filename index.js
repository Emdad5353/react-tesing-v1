const getFullName = (fname, lname)=> {
    return `${fname} ${lname}`
}

const actualName= getFullName('Emdad', 'Rahman');
const expected= 'Emdadur Rahman'

if(actualName !== expected){
    throw new Error(`${actualName} is not equal to ${expected}`)
}