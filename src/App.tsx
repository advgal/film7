import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import {Film} from './film';
import {Button, PageHeader} from "antd";


function App () {
    const [filme, setFilme] = useState ([]);

    useEffect (() => {
        holFilme ();
    }, []);

    const holFilme=async ()=>{
        const res = await fetch (
            "https://api.themoviedb.org/3/discover/movie?api_key=d49416cd8a2e65767b5ac717906e3f63"
        );
        const json = await res.json ();
        let results = json.results;
        setFilme (results);
    }

    const out=()=>{
        return filme.map ((film:any) => (<li><Link to={`/film/${film.id}`}>{film.title}</Link></li>));
    }
    return (
        <Router>
            <PageHeader title="Peters Filme"></PageHeader>
            <Button type="primary">was?</Button>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <h1>Filme</h1>
                        <ul>
                            {
                                out ()
                            }
                        </ul>
                    </div>
                </Route>
                <Route path="/film/:id" >
                    <Film></Film>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
