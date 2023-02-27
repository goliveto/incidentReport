import React from 'react'

interface Props {
    text: string;
}

const ErrorPage :React.FC<Props> = (props: Props) => {
    return (<div><h1>{props.text}</h1></div>)
}

export default ErrorPage;
