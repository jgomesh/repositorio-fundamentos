const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, ${order['address']['street']}, Nº: ${order['address']['number']}, AP: ${order['address']['apartment']}.`

}

customerInfo(order);
console.log(customerInfo(order))

const orderModifier = (order) => {
  const orderPizza = Object.keys(order['order']['pizza'])
  order['payment']['total'] = 50;
  order['name'] = 'Luiz Silva';
  // Adicione abaixo as informações necessárias.
  return `Olá ${order['name']}, o total do seu pedido de ${orderPizza[0]}, ${orderPizza[1]} e ${order['order']['drinks']['coke']['type']} é R$ ${order['payment']['total']},00.`
  ;
}

orderModifier(order);
console.log(orderModifier(order))