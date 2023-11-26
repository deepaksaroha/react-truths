{
    const Component1 = () => {
        const [state, setState] = useState(0);

        handleClick = () => {
            setState((count) => count + 1);
            setState((count) => count * 2);
        };

        return (
            <div>
                <button onClick={handleClick}>click me</button>
            </div>
        );
    };

    /*
        Results in single rerender
        as both setstate calls are batched.
    */
}

/*----------------------------------*/

{
    const Component1 = () => {
        const [state, setState] = useState(0);

        handleClick = () => {
            fetch('///')
            .then(_ => {
                setState((count) => count + 1);
                setState((count) => count * 2);
            })
        };

        return (
            <div>
                <button onClick={handleClick}>click me</button>
            </div>
        );
    };

    /*
        React 18 - Results in single rerender
        as both setstate calls are batched called automatic batching.
        React <=17 - Results in 2 rerenders as
        the 2 setstates are inside promise so not batched.
    */
}

/*----------------------------------*/

{
    const Component1 = () => {
        const [state, setState] = useState(0);

        handleClick = () => {
            setTimeout(_ => {
                setState((count) => count + 1);
                setState((count) => count * 2);
            })
        };

        return (
            <div>
                <button onClick={handleClick}>click me</button>
            </div>
        );
    };

    /*
        Results in single rerender
        as both setstate calls are batched.
    */
}

/*----------------------------------*/



