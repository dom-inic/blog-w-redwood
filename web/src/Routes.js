// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import CommentsLayout from 'src/layouts/CommentsLayout'
import ContactsLayout from 'src/layouts/ContactsLayout'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
    <Route path="/login" page={LoginPage} name="login" />
    <Route path="/signup" page={SignupPage} name="signup" />
    <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
    <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
    <Private unauthenticated="home">
      <Set wrap={CommentsLayout}>
        <Route path="/admin/comments/new" page={CommentNewCommentPage} name="newComment" />
        <Route path="/admin/comments/{id:Int}/edit" page={CommentEditCommentPage} name="editComment" />
        <Route path="/admin/comments/{id:Int}" page={CommentCommentPage} name="comment" />
        <Route path="/admin/comments" page={CommentCommentsPage} name="comments" />
      </Set>

      <Set wrap={ContactsLayout}>
        <Route path="/admin/contacts/new" page={ContactNewContactPage} name="newContact" />
        <Route path="/admin/contacts/new" page={ContactNewContactPage} name="newContact" />
        <Route path="/admin/contacts/{id:Int}/edit" page={ContactEditContactPage} name="editContact" />
        <Route path="/admin/contacts/{id:Int}" page={ContactContactPage} name="contact" />
        <Route path="/admin/contacts" page={ContactContactsPage} name="contacts" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/admin/posts" page={PostPostsPage} name="posts" />
      </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        {/* converting is to Int for graphql {id:Int}*/}
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
