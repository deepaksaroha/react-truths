{
    const B = React.memo(() => {
        console.log("B");
        return null;
    })

    const A = React.memo(({ children }) => {
        console.log("A");
        return children;
    })

    const App = () => {
        const [count, setCount] = useState(0);
        return <div>
            <button onClick={() => setCount(count => count + 1)}>
                Click
            </button>
            <A>
                <B/>
            </A>
        </div>
    }

    userEvent.click(screen.getByText('click me'))

    /*
        A   // in the first render 
        B   // in the first render
        A   // renredered because of App rerendered and A is child of App
               though A is memoized B is recreated which creates a new
               children prop in A.
            // B is not rerendered as it is memoized and there is no change in props.
    */
}