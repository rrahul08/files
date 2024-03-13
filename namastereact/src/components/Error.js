import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h2>OOPS!!!</h2>
            <h1>{err.status + ":" + err.statusText}</h1>
        </div>
    )
}

export default Error;