import React, {Component} from 'react';
import Paragraph from './Paragraph';

class App extends Component {
    render() {
        return (
            <div className="my-app">
                <h1>This is React!!!</h1>
                <Paragraph text="First Paragraph" />
                <Paragraph text="Second Paragraph" />
            </div>
        );
    }
}

export default App;
