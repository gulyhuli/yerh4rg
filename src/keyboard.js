const kb = require ('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.pack],
    [kb.home.bots, kb.home.ads],
    [kb.home.cart]
  ],
  cart: [
    [kb.cart.clear],
    [kb.cart.order]
  ]
}
