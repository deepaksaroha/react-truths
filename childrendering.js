{
    const B = () => {
        console.log("B");
        return null;
    }

    const A = () => {
        console.log("A");
        const [count, setCount] = useState(0);

        useEffect(() => {
            setCount(count => count + 1);
        }, [])

        return <B />;
    }

    const C = () => <A />;

/* first render   -> A
                     B
    second render -> A
                     B
*/}

/*----------------------------------*/

{
    const B = () => {
        console.log("B");
        return null;
    }

    const A = ({ children }) => {
        console.log("A");
        const [count, setCount] = useState(0);

        useEffect(() => {
            setCount(count => count + 1);
        }, [])

        return children;
    }

    const C = () => <A><B/></A>

/* first render   -> A
                     B
    second render -> A 
    // B is not rendered here as during reconciliation the children prop
    is same object in both current and new virtual dom.
*/}

/*----------------------------------*/

{
    const B = <h1>{console.log("B")}</h1>

    const A = () => {
        console.log("A");
        const [count, setCount] = useState(0);

        useEffect(() => {
            setCount(count => count + 1);
        }, [])

        return B;
    }

    const C = () => <A/>

/* first render   -> A
                     B
    second render -> A
    // B is not rendered here as during reconciliation the B object is just same
    during initial rerender.
*/}