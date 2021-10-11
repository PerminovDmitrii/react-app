export default interface Experience {
    expWork: false | WorkInf[],
}

interface WorkInf {
    start: Date,
    end: 'Until now' | Date,
    companyName: string,
    position: string,
    responsibilities: string
}
