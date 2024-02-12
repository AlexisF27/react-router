import PropTypes from 'prop-types'

const Feed = ({posts}) => {
  return (
    <div>Feed</div>
  )
}

Feed.propTypes = {
  posts: PropTypes.string.isRequired,
}

export default Feed