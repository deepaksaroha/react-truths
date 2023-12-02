{
    const MyContext = createContext(0);

    function B({ children }) {
        const count = useContext(MyContext);
        console.log("B");
        return children;
    }

    const A = ({ children }) => {
        const [state, setState] = useState(0);
        console.log("A");
        useEffect(() => {
            setState((state) => state + 1);
        }, []);
        return (
            <MyContext.Provider value={state}>{children}</MyContext.Provider>
        );
    };

    function C() {
        console.log("C");
        return null;
    }

    function D() {
        console.log("D");
        return null;
    }
    function App() {
        console.log("App");
        return (
            <A>
                <B>
                    <C />
                </B>
                <D />
            </A>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);

    /*
        A rerenders as a result of setState.
        A has children(child tree), but those are recieved in children prop object.
        This object has not changed since last render so children wont rerender.
        So B, C and D should not rerender.
        But B is a consumer of context, therefore it rerenders because context value
        has changed when A rerendered.
    */
}