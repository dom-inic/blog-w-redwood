import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'
import CommentsCell from 'src/components/Comment/CommentsCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
      <CommentsCell />
    </>
  )
}

export default ArticlePage
