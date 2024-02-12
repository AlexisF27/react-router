// eslint-disable-next-line no-unused-vars
import { Route, Switch, useHistory } from 'react-router'
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';

import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'

function App() {
    const [search, setSearch] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [searchResults, setSearchResults] = useState('');
    const [posts, setPosts] = useState([]);
    return (
        <div className="App">
            <Header title="React JS Blog"/>
            <Nav search={search} setSearch={setSearch} />
            <Switch>
                <Route exact path="/">
                    <Home posts={posts} setPosts={setPosts}/>
                </Route>
                <Route path="/about" component={About} />
                <Route path="/missing" component={Missing} />
                <Route exact path="/post">
                    <NewPost />
                </Route>
                <Route path="/post/:id" >
                    <PostPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
