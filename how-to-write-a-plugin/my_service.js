const Seneca = require('seneca')

Seneca()
  .quiet() // only log errors
  .use('my_plugin', {world: 'Earth'})
  .act('say:hello', Seneca.util.print)
