import * as React from 'react';

declare abstract class ReactFC extends React.Component<any> {
    static fcRoot(...args: any): void
}

export default ReactFC;