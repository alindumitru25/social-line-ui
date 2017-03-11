import * as React from "react";

export interface Props {
    text: string
}

export class Hello extends React.Component<Props, undefined> {
    render() {
        return <h1>Hello World</h1>;
    }
}