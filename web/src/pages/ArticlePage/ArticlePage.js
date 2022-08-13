import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'
import CommentCell from 'src/components/Comment/CommentCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
      <CommentCell />
    </>
  )
}

export default ArticlePage
