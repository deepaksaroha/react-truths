{
    const Comp = () => {
        console.log("Comp");
        const [state, setState] = useState(0);
        
        useEffect(() => {
            setState(state => state + 1);
        }, []);

        useEffect(() => {
            console.log("effect");
            return () => {
                console.log("effect cleanup");
            }
        }, [state]);

        useLayoutEffect(() => {
            console.log("layouteffect");
            return () => {
                console.log("layouteffect cleanup");
            }
        }, [state]);
    }

    /*
        Comp
        layouteffect                //layouteffect called before paint
        effect                      //called after paint
        Comp                        //beginning of second render
        layouteffect cleanup        //before calling layouteffect again, cleanup is called 
        layouteffect                //layouteffect is called before paint
        effect cleanup              //before calling effect again, cleanup is called 
        effect                      //effect is called after paint
    */
}