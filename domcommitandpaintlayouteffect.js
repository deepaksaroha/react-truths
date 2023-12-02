{
    const Comp = () => {
        const ref = useRef(false);

        useLayoutEffect(() => {
            console.log(1);
            ref.current = true;
        })

        return <button
            autoFocus
            onFocus={() => console.log(!!ref.current)}
        >
            button
        </button>
    }

    /*
        false   // when dom is committed after render, at that time itself 
        1          autofocus comes into effect and onFocus is called, this
                   prints !!ref.current = !!false = false on console.
                   Just before paint useLayoutEffect is called which consoles 1.
    */
}