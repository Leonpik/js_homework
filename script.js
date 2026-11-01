let firstName = "tARAS";
let lastName = "shevchenko";
let birthYear = "1994";
let email = "Taras.Shevchenko@Gmail.com";
let isSubscribed = true;
let nickname;
let visits = 0;
const currentYear = 2026;
 


console.log('Step 1:', typeof birthYear);
const birthYearNum = Number(birthYear);
console.log('Step 1:', typeof birthYearNum, birthYearNum);
const age = currentYear - birthYearNum;
let ageIn10Years = age;
ageIn10Years += 10;
console.log('Step 2:', age, ageIn10Years); 
const normalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
const normalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
console.log('Step 3:', normalizedFirstName, normalizedLastName);
const fullName = `${normalizedFirstName} ${normalizedLastName}`;
console.log('Step 4:', fullName, fullName.length);
const atIndex = email.indexOf('@');
const login = email.slice(0, atIndex);
const domain = email.slice(atIndex + 1).toLowerCase();
console.log('Step 5:', atIndex);
console.log('Step 5:', login, domain);
const maskedEmail = login.slice(0, 2) + '***' + '@' + domain;
console.log('Step 6:', maskedEmail);
const isAdult = age >= 18;
console.log('Step 7:', isAdult, typeof isAdult);
console.log('Step 7:', isAdult && isSubscribed);
console.log('Step 7:', isAdult || isSubscribed);
console.log('Step 7:', !isSubscribed);
const displayName = nickname || fullName;
console.log('Step 8:', displayName);
const daysLived = Math.round(age * 365.25);
console.log('Step 9:', daysLived);
const confirmationCode = Math.floor(Math.random() * 9000) + 1000;
console.log('Step 10:', confirmationCode);
const firstVisit = visits++;
console.log('Step 11:', firstVisit, visits);
const secondVisit = ++visits;
console.log('Step 11:', secondVisit, visits);
console.log(`Користувач: ${fullName}
Показувати як: ${displayName}
Вік: ${age} (через 10 років — ${ageIn10Years})
Email: ${maskedEmail}
Повнолітній: ${isAdult}
Підписка: ${isSubscribed}
Входів: ${visits}
Прожито днів: ${daysLived}
Код підтвердження: ${confirmationCode}`);
 