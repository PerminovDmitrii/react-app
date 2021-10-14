export default interface BasicInfoInt{
    photo: FileList | null;
    surname: string;
    name: string;
    patronymic: string;
    city: string;
    birthdate: Date | null;
    gender: SelectItem;
    ctznShip: string;
    careerObj: string;
    salary: string;
    currency: SelectItem;
    about: string;
}

export const GENDER: SelectItem[] = [
    {
        value: 'female',
        text: 'Female'
    },
    {
        value: 'male',
        text: 'Male'
    }
];

export const CURRENCY: SelectItem[] = [
    {
        value: 'rub',
        text: 'RUB'
    },
    {
        value: 'usd',
        text: 'USD'
    },
    {
        value: 'eur',
        text: 'EUR'
    }
];

export interface SelectItem {
    value: string;
    text: string;
}

export const disclaimer: string = 'Areas marked with an asterisk are required';

