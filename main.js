console.log('#20. JavaScript homework: замовлення в інтернет-магазині')



const orderObj = {
  id: 1024,
  customer: { firstName: 'John', lastName: 'Smith', age: 15 },
  priceStr: '1099.99 грн',
  quantityStr: '3',
  deliveryDay: 3,
  tempNote: 'службова нотатка, видалити перед відправкою',
};

orderObj.city = 'Київ';
console.log(`${orderObj.customer.firstName} ${orderObj.customer.lastName} from ${orderObj.city}`);

console.log('Step 2a:', 'tempNote' in orderObj);
delete orderObj.tempNote;
console.log('Step 2b:', 'tempNote' in orderObj);

const backupOrder = structuredClone(orderObj);
backupOrder.customer.firstName = 'Ann';
console.log('Step 3a:', orderObj.customer.firstName, backupOrder.customer.firstName);

const paidOrder = Object.assign({}, orderObj, { status: 'paid' });
console.log('Step 3b:', paidOrder.status, 'status' in orderObj);

const price = parseFloat(orderObj.priceStr);
const quantity = Number(orderObj.quantityStr);
const total = price * quantity;
console.log('Step 4:', price, quantity, total);

const age = orderObj.customer.age;
const discount = age < 18 ? 0.1 : age <= 60 ? 0 : 0.15;
const finalTotal = total - total * discount;
console.log('Step 5:', discount, finalTotal);

let deliveryPrice;
if (finalTotal < 500) {
  deliveryPrice = 100;
} else if (finalTotal <= 1500) {
  deliveryPrice = 50;
} else {
  deliveryPrice = 0;
}
console.log('Step 6:', deliveryPrice);

function getDeliveryDayName(day) {
  let dayName;
  switch (day) {
    case 1:
      dayName = 'Понеділок';
      break;
    case 2:
      dayName = 'Вівторок';
      break;
    case 3:
      dayName = 'Середа';
      break;
    case 4:
      dayName = 'Четвер';
      break;
    case 5:
      dayName = 'Пʼятниця';
      break;
    case 6:
      dayName = 'Субота';
      break;
    case 7:
      dayName = 'Неділя';
      break;
    default:
      dayName = 'Невідомий день';
  }
  return dayName;
}

const deliveryDayName = getDeliveryDayName(orderObj.deliveryDay);
console.log('Step 7:', deliveryDayName);
console.log('Step 7:', getDeliveryDayName(3));
console.log('Step 7:', getDeliveryDayName(7));
console.log('Step 7:', getDeliveryDayName(9));
console.log('Step 7:', getDeliveryDayName(1.5));
console.log('Step 7:', getDeliveryDayName('2'));

let bonusSum = 0;
for (let i = 1, limit = 20; i <= limit; i++) {
  if (i % 3 === 0) {
    continue;
  }
  bonusSum += i;
  if (bonusSum > 50) {
    break;
  }
}
console.log('Step 8:', bonusSum);
