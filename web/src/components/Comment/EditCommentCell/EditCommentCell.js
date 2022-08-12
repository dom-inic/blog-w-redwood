import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CommentForm from 'src/components/Comment/CommentForm'

export const QUERY = gql`
  query EditCommentById($id: Int!) {
    comment: comment(id: $id) {
      id
      postId
      message
      createdAt
    }
  }
`
const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateCommentMutation($id: Int!, $input: UpdateCommentInput!) {
    updateComment(id: $id, input: $input) {
      id
      postId
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ comment }) => {
  const [updateComment, { loading, error }] = useMutation(
    UPDATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Comment updated')
        navigate(routes.comments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { postId: parseInt(input.postId) })
    updateComment({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Comment {comment.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <CommentForm
          comment={comment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
