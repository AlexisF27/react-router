//import { useEffect, useState } from 'react';

// eslint-disable-next-line no-unused-vars
import { Route, Switch, useHistory } from 'react-router'

import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
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
