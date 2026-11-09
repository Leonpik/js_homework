console.log('#21. JavaScript homework: читацький клуб')

const memberObj = {
  name: 'Olena',
  yearOfBirth: 1998,
  city: 'Львів',
  booksPerMonth: 3,
  favoriteGenre: 'фентезі',
}

/*
 * Завдання 1. Функція, параметри за замовчуванням, перевірка на undefined
 */
function memberCard(name, yearOfBirth, favoriteGenre, city = 'Київ') {
  const parts = []

  if (typeof name !== 'undefined') {
    parts.push(`My name is ${name}.`)
  }

  if (typeof yearOfBirth !== 'undefined') {
    const age = new Date().getFullYear() - yearOfBirth
    parts.push(`I am ${age} years old.`)
  }

  if (typeof favoriteGenre !== 'undefined') {
    parts.push(`I read ${favoriteGenre}.`)
  }

  parts.push(`I live in ${city}.`)

  return parts.join(' ')
}

// з усіма чотирма аргументами
console.log(memberCard('Olena', 1998, 'фентезі', 'Львів'))
// без міста
console.log(memberCard('Olena', 1998, 'фентезі'))
// без жанру, але з містом
console.log(memberCard('Olena', 1998, undefined, 'Львів'))

/*
 * Завдання 2. Функція і цикл for ... in
 */
function describeMember(obj) {
  let result = ''

  for (const key in obj) {
    result += `${key}: ${obj[key]}; `
  }

  return result.trim()
}

console.log(describeMember(memberObj))
