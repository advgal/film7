import React, {useEffect, useState} from 'react';
import './App.css';

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
        debugger;
        let results = json.results;
        setFilme (results);
    }

    const out=()=>{
        return filme.map ((film:any) => (<li>{film.title}</li>));
    }
    return (
        <div className="App">
            <h1>Filme</h1>
            <ul>
                {
                    out()
                }
            </ul>
        </div>
    );
}

export default App;
