import Comment from 'src/components/Comment/Comment'

export const QUERY = gql`
  query FindCommentById($id: Int!) {
    comment: comment(id: $id) {
      id
      postId
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Comment not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ comment }) => {
  return <Comment comment={comment} />
}
