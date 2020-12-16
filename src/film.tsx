import React, {ComponentProps, useEffect, useState} from 'react'; // we need this to make JSX compile
import { useParams} from "react-router-dom";

interface ParamTypes {
    id: string
}

export const Film = (props: ComponentProps<any>) => {
    const [token, setToken] = useState<any> ({});
    const {id}=useParams<ParamTypes>();

    useEffect (() => {
        async function getToken () {
            console.log ('vor fetch');
            const result = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=d49416cd8a2e65767b5ac717906e3f63`);
            console.log ('nach fetch');
            const json = await result.json ();
            setToken (json);
        }

        getToken ();
    }, []);

    const jsonString = () => {
        return JSON.stringify (token,null,4);
    }

    return (
        <div>
            <h1>{token.title}</h1>
            <dl>
                <dt>Erschienen</dt>
                <dd>{token.release_date}</dd>
            </dl>
            <img src={`https://image.tmdb.org/t/p/w500/${token.poster_path}`}/>
            <pre>
            {
                jsonString ()
            }
            </pre>
        </div>
    )
}
