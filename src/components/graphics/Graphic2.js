import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as graphicsActions from '../../actions/graphicsActions';
import {browserHistory} from 'react-router';

import 'highcharts';
import "highcharts/highstock";
import "highcharts/modules/exporting";


class Graphic2 extends React.Component {

    componentWillMount(){
        this.props.actions.loadGraphics();
    }

    componentWillReceiveProps(nextProps) {

        $(function () {
            $('#container').highcharts({
                chart: {
                    type: 'spline',
                    inverted: true
                },
                title: {
                    text: 'Atmosphere Temperature by Altitude'
                },
                subtitle: {
                    text: 'According to the Standard Atmosphere Model'
                },
                xAxis: {
                    reversed: false,
                    title: {
                        enabled: true,
                        text: 'Altitude'
                    },
                    labels: {
                        formatter: function () {
                            return this.value + 'km';
                        }
                    },
                    maxPadding: 0.05,
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Temperature'
                    },
                    labels: {
                        formatter: function () {
                            return this.value + '°';
                        }
                    },
                    lineWidth: 2
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br/>',
                    pointFormat: '{point.x} km: {point.y}°C'
                },
                plotOptions: {
                    spline: {
                        marker: {
                            enable: false
                        }
                    }
                },
                series: [{
                    name: 'Temperature',
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

Graphic2.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Graphic2);
