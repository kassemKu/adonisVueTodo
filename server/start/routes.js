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
  Route.delete('projects/:id', 'ProjectController.destroy').middleware('auth')
  Route.patch('projects/:id', 'ProjectController.update').middleware('auth')

  Route.get('projects/:id/tasks', 'TaskController.index').middleware('auth')
  Route.post('projects/:id/tasks', 'TaskController.create').middleware('auth')

})
  .prefix('api')


