import {fakeData} from "./data";
import {TypeFakePeople} from "./types";

const amount = (company = [], conditional: string) => {
    if(!company.length) {
        return 0
    }
    return company.reduce((acc, cur:TypeFakePeople) => (cur.gender === conditional) ? ++acc : acc, 0)
}

const averageAge = (company = []) => {
    if(!company.length) {
        return 0
    }
    const totalAges = company.reduce((acc, cur:TypeFakePeople) => acc + convertDateToAge(cur.birthday), 0)
    return Math.floor( totalAges / company.length)
}

const convertDateToAge = (date) => {
    const now = new Date();
    const birthday = new Date(date);
    let age = now.getFullYear() - birthday.getFullYear();
    if(now.getMonth() < birthday.getMonth()) {
        age--;
    }

    return age
}

const showFilterName = (prop, value) => {
    const properties = {
        full_name: {"Nome": value},
        email: {"Email": value},
        salary: {"Salario": value},
        title: {"Titulo": value},
        company: {"Empresas": value},
        birthday: {"Age": value},
        gender: {"Genero": value},
    }

    return properties[prop]
}

const groupBy = (fakeData: TypeFakePeople[], propriedade: string) => {
    const data = fakeData.reduce(function (todos, atual) {

        if (todos[atual[propriedade]]) {
            todos[atual[propriedade]] = [...todos[atual[propriedade]], atual]
        } else {
            todos[atual[propriedade]] = atual
        }

        return todos
    }, {})

    return Object.keys(data).map(item => {
        const object = data[item];
        const filter = showFilterName(propriedade, item);
        return {
            ...filter,
            'Pessoas': object.length ?? 0,
            'Homens': amount(object, 'male'),
            'Mulheres': amount(object, 'female'),
            'Media de idade': `${averageAge(object)} anos`,
        }
    })
};

const param = "gender"
const info = groupBy(fakeData, param);
console.log(`Group by:  ${param}`)
console.table(info);
