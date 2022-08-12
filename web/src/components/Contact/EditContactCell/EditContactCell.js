import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ContactForm from 'src/components/Contact/ContactForm'

export const QUERY = gql`
  query EditContactById($id: Int!) {
    contact: contact(id: $id) {
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
const UPDATE_CONTACT_MUTATION = gql`
  mutation UpdateContactMutation($id: Int!, $input: UpdateContactInput!) {
    updateContact(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contact }) => {
  const [updateContact, { loading, error }] = useMutation(
    UPDATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contact updated')
        navigate(routes.contacts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateContact({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Contact {contact.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <ContactForm
          contact={contact}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
