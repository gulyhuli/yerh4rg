module.exports = {
  contacts: `Такого бота можно продавать за 150-300к спокойно. А можно за 25 000 рублей`,
  description: `Здравствуйте! Этот бот любезно поможет Вам выбрать цветы в нашем магазине, а затем оформить доставку в любую точку города.\n
Для Вашего удобства бот понимает следующие команды:
/start - начало работы
/help - список команд
/cart - корзина
/packaging - букеты, которые Вы можете заказать в нашем магазине
/bots - композиции, которые Вы можете заказать в нашем магазине
/ads - подарки, которые Вы можете заказать в нашем магазине
/reasons - букеты и композиции, специально отобранные на разные случаи жизни
/prices - ассортимент букетов и композиций, отсортированных по стоимости
/contacts - контакты нашего магазина\n\n
Надеемся, Вам понравится использование этого бота!`,
  logStart() {
    console.log('Bot has been started...')
  },
  getChatId(msg) {
    return msg.chat.id
  }
}
