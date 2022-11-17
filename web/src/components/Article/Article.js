import { Link, routes } from '@redwoodjs/router'

const truncate = (text, length)=> {
  return text.substring(0,length) + "..."
}

const Article = ({ article, summary= false}) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>
      {summary ? truncate(article.body, 100) : article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
