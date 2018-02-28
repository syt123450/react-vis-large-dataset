import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import '../node_modules/react-vis/dist/style.css';
import {

    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeriesCanvas

} from 'react-vis';

class App extends Component {

    constructor() {
        super();

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        axios.get(`./data/point.json`)
            .then(response => this.setState({data: response.data}))
    }

    render() {
        return (
            <div className="App">
                <XYPlot
                    width={300}
                    height={300}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    <MarkSeriesCanvas
                        className="mark-series-example"
                        strokeWidth={1}
                        opacity="0.8"
                        sizeRange={[1, 1]}
                        data={this.state.data}/>
                </XYPlot>
            </div>
        );
    }
}

export default App;
