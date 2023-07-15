import { type Result, SortBy } from '../models/users.interface.ts'

interface IUsersListProps {
  users: Result[]
  showColors: boolean
  handleDelete: (email: string) => void
  changeSorting: (sorting: SortBy) => void
}
export function UserList (props: IUsersListProps) {
  const { users, changeSorting, handleDelete, showColors } = props
  const tableClassName = showColors ? 'table table-striped' : 'table'
  return (
		<>
			<table className={tableClassName} width='100%'>
				<thead>
					<tr>
						<th>Photo</th>
						<th onClick={() => { changeSorting(SortBy.NAME) }}>Name</th>
						<th onClick={() => { changeSorting(SortBy.LAST) }}>LastName</th>
						<th onClick={() => { changeSorting(SortBy.COUNTRY) }}>Country</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
				{
					users.map((user) => {
					  return (
							<tr key={user.email}>
								<td>
									<img src={user.picture.thumbnail} alt={user.name.first} />
								</td>
								<td>{user.name.first}</td>
								<td>{user.name.last}</td>
								<td>{user.location.country}</td>
								<td>
									<button onClick={() => { handleDelete(user.email) }}>Delete</button>
								</td>
							</tr>
					  )
					})
				}
				</tbody>
			</table>
		</>
  )
}
