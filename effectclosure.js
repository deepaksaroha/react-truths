{
    const Comp = () => {
        const [state, setState] = useState(0);
        console.log(state);

        useEffect(() => {
            setState((state) => state + 1);
        }, []);

        useEffect(() => {
            console.log(state);
            setTimeout(() => {
                console.log(state);
            }, 100);
        }, []);

        return null;
    }

    /*
        0   // initial state value consoled
        0   // initial state value consoled in useeffect after paint
        1   // updated state value consoled
        0   // value from settimeout is old value because of closure
               with the 'const state' variable of previous render
    */

}
