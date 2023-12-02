{
    const Comp = () => {
        const [state, setState] = useState(0);

        const onClick = () => {
            console.log("handler");
            flushSync(() => {
                setState((state) => state + 1);
            });
            console.log("handler " + state);
        };
        console.log("render " + state);

        return (
            <div>
                <button onClick={onClick}>Click</button>
            </div>
        );
    };

    userEvent.click(screen.getByText("click me"));

    /*
        render 0
        handler
        render 1    // "render 1" because setState is called in flushSync which causes 
                       state update synchronously which results in immediate rerender
                       thus render 1 is printed
        handler 0   // after rerender remaining of the onClick function is called
                       which prints handler 0. 0 because onClick had a closure with 
                       state from previous render
    */
}
