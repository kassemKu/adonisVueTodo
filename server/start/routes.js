'use strict'


const Route = use('Route')

// Route.get('/', ({ request }) => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.group(() => {
  Route.post('auth/register', 'UserController.register')
})
  .prefix('api')


