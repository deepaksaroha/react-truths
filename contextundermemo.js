{
    const Context1 = createContext(0);

    const Component3 = () => {
        const state = useContext(Context1);
        return null;
    };

    const Component2 = React.memo(() => {
        return <Component3 />;
    });

    const Component1 = () => {
        const [state, setState] = useState(0);

        useEffect(() => {
            setState((state) => state + 1);
        }, []);

        return (
            <div>
                <Context1.Provider value={state}>
                    <Component2 />
                </Context1.Provider>
            </div>
        );
    };

    /*
        Component3 rerenders even when it's parent is
        is memoized as it is consuming the context.
        Component2 doesn't rerender as it is memoized.
    */
}

/*-----------------------------------------*/

{
    const Context1 = React.createContext(0);

    const Component2 = React.memo(() => {
        const state = React.useContext(Context1);
        console.log("Component2");
        return null;
    });

    const Component1 = () => {
        const [state, setState] = React.useState(0);

        React.useEffect(() => {
            setState((state) => state + 1);
        }, []);

        return (
            <div>
                <Context1.Provider value={state}>
                    <Component2 />
                </Context1.Provider>
            </div>
        );
    };

    /*
        Component2 rerenders even when it's parent or itself
        is memoized as it is consuming the context.
    */
}
