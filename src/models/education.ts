export default interface Education {
    level: eduLvl,
    nativeLang: string,
    foreignLang: ForeignLang[],
    eduPlace: eduPlace[],
}

const enum eduLvl {
    mid = 'middle',
    midSpec = 'middle-specialized',
    incompleteHigher = 'incomplete higher',
    higher = 'higher'
}

interface ForeignLang {
    title: string,
    lvl: string
}

interface eduPlace {
    title: string,
    faculty: string,
    spec: string,
    endDate: Date
}
