export const QUERY = gql`
  query ContactsQuery {
    contacts {
      id
      firstName
      secondName
      email
      subject
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => (
        <ul key={contact.id}>
          <header>
            <h2>{contact.subject}</h2>
          </header>
          <p>{contact.message}</p>
          <div>sent at: {contact.createdAt}</div>
        </ul>
      ))}
    </>
  )
}
