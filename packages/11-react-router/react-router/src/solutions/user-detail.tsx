import { Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { UserDetailTasks } from './user-detail-tasks'
import { FC } from 'react'

export const UserDetail: FC = () => {
  const { name } = useParams<{ name: string }>()
  const history = useHistory()
  const { url, path } = useRouteMatch()
  return (
    <>
      <h1>User {name}</h1>
      <button onClick={() => history.push(`${url}/tasks`)}>Tasks</button>
      <Switch>
        <Route path={path} exact>
          <h2>User</h2>
        </Route>
        <Route to={`${path}/tasks`} exact>
          <UserDetailTasks />
        </Route>
      </Switch>
    </>
  )
}
