export default interface BasicInfo {
    basic: {
        photo: File,
        lastName: string,
        firstName: string,
        midName: string,
        city: string,
        birthdate: Date,
        sex: GENDER,
        ctznShip: string,
        careerObj: string,
        salary: Salary,
        about: string
    },
}

interface Salary {
    value: number,
    currency: CURRENCY
}

export const enum GENDER {
    male = 'MALE',
    female = 'FEMALE'
}

export const enum CURRENCY {
    rub = 'RUB',
    usd = 'USD',
    eur = 'EUR'
}
