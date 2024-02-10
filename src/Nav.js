import PropTypes from 'prop-types'
const Nav = ({search, setSearch}) => {
    return (
        <nav className="nav">
            <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}></input>
            </form>
        </nav>
    )
}

Nav.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
}

export default Nav
