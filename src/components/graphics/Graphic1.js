import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as graphicsActions from '../../actions/graphicsActions';
import {browserHistory} from 'react-router';

import 'highcharts';
import "highcharts/highstock";
import "highcharts/modules/exporting";


class Graphic1 extends React.Component {

    componentWillMount(){
        this.props.actions.loadGraphics();
    }

    componentWillReceiveProps(nextProps) {

        $(function () {
            $('#container').highcharts({
                title: {
                    text: 'Monthly Average Temperature',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: WorldClimate.com',
                    x: -20
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Tokyo',
                    data: nextProps.coord
                }]
            });
        });


    }

    render() {
        return (
            <div className="container">
                <div id="container"></div>
            </div>
            );
    }
}


function coordToArray(coordObj){

    let coord = [];
    coordObj.map( item => {

        let dot = `${item.X}.${item.Y}`;
        coord.push(+dot);
        }
     );
    return coord;
}

Graphic1.propTypes = {
    coord: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        coord: coordToArray(state.coord)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(graphicsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Graphic1);
