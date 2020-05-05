import React from 'react'

type Props = {
    fallback: (error: Error) => React.ReactNode
}
type State = { error: Error | null }

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error: Error | null, errorInfo: object) {
        // log error
    }

    render() {
        const { children, fallback } = this.props
        const { error } = this.state

        if (error) {
            return fallback(error)
        }

        return children
    }
}

export default ErrorBoundary