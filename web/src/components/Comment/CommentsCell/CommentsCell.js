import { Link, routes } from '@redwoodjs/router'

import Comments from 'src/components/Comment/Comments'

export const QUERY = gql`
  query FindComments {
    comments {
      id
      postId
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No comments yet. '}

      <Link to={routes.newComment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ comments }) => {
  return <Comments comments={comments} />
}
