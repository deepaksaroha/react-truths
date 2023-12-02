{
    const func = () => {
        throw new Error();
    }

    const Comp2 = () => {
        return <ErrorBoundary name="inner">{func()}</ErrorBoundary>
    }

    const Comp3 = () => {
        return <ErrorBoundary name="outer"><Comp2 /></ErrorBoundary>
    }

    const App = () => {
        return <Comp3 />
    }

    class ErrorBoundary extends React.Component {
        constructor(props){
            super(props)
        }

        static getDerivedStateFromError() {
            return {  }
        }

        componentDidCatch(error) {
            console.log(error)
        }

        render () {
            if(error == 1){
                return <></>
            }
            return this.props.children
        }
    }

    /*
        error thrown in function func is caught by ErrorBoundary outer and
        not error boundary inner because inner error boundary will only
        catch errors in its children. Error is thrown by func is not in 
        which is not in inner's children but rather it is in Comp2 component.
        Comp2 is child of outer ErrorBoundary inside Comp3.
    */
}