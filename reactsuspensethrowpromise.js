{
    const resource = (() => {
        let data = null;
        let status = "pending";
        let fetcher = null;
        return {
            get() {
                if (status === "ready") {
                    return data;
                }
                if (status === "pending") {
                    fetcher = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            data = 1;
                            status = "ready";
                            resolve();
                        }, 100);
                    });
                    status = "fetching";
                }

                throw fetcher;
            },
        };
    })();

    function A() {
        console.log("A1");
        const data = resource.get();
        console.log("A2");
        return <p>{data}</p>;
    }

    function Fallback() {
        console.log("fallback");
        return null;
    }

    function App() {
        console.log("App");
        return (
            <div>
                <Suspense fallback={<Fallback />}>
                    <A />
                </Suspense>
            </div>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);

    /*
        first the App is rendered then A component is executed, 
        before it's return is reached, seuspense finds a loading, so it
        pauses further execution and renders fallback ui, once loading()
        is done, it rerenders all the components inside suspense.
    */
}


/*----------------------------------*/

{
    const resource = (() => {
        let data = null;
        let status = "pending";
        let fetcher = null;
        return {
            get() {
                if (status === "ready") {
                    return data;
                }
                if (status === "pending") {
                    fetcher = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            data = 1;
                            status = "ready";
                            resolve();
                        }, 100);
                    });
                    status = "fetching";
                }

                throw fetcher;
            },
        };
    })();

    function A() {
        console.log("A1");
        const data = resource.get();
        console.log("A2");
        return <p>{data}</p>;
    }

    function B() {
        console.log("B");
        return null
    }

    function Fallback() {
        console.log("fallback");
        return null;
    }

    function App() {
        console.log("App");
        return (
            <div>
                <Suspense fallback={<Fallback />}>
                    <A />
                    <B />
                </Suspense>
            </div>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);

    /*
        first the App is rendered then A component is executed, 
        before it's return is reached, seuspense finds a loading, so it
        pauses further execution and renders fallback ui, once loading()
        is done, it rerenders all the components inside suspense.
    */
}


/*----------------------------------*/



