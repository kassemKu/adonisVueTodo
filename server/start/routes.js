'use strict'


const Route = use('Route')

// Route.get('/', ({ request }) => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.group(() => {
  Route.post('auth/register', 'UserController.register')
  Route.post('auth/login', 'UserController.login')

  Route.get('projects', 'ProjectController.index').middleware('auth')
  Route.post('projects', 'ProjectController.create').middleware('auth')
})
  .prefix('api')


