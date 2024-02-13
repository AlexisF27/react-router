// eslint-disable-next-line no-unused-vars
import { Link, useParams } from 'react-router-dom'

import PropTypes from 'prop-types'

export const PostPage = ({ posts, handleDelete }) => {
    //NOTE:
    //A esta pagina se le va a dar el chance de borrar por eso el handledelete
    //id es a lo que lo llamamos al route '/id' si a eso lle llamos diferentes en la ruta hay que cambiar esto
    const { id } = useParams()
    const post = posts.find((post) => post.id.toString() === id)
    return (
        <main className="PostPage">
            <article className="post">{post && <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='body'>{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>{post.title}</button>
            </>}</article>
        </main>
    )
}
PostPage.propTypes = {
    posts: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default PostPage
