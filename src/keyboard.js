const kb = require ('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.bouqets],
    [kb.home.bots, kb.home.ads],
    [kb.home.cart]
  ],
  cart: [
    [kb.cart.clear],
    [kb.cart.order]
  ]
}