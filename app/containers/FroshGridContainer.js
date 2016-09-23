import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import FroshGrid from '../components/FroshGrid';
import apiClient from '../utils/apiClient';

const styles = {
    loading: {
        width: "100%",
        height: "70vh",
        textAlign: "center",
    },
    center: {
        marginTop: "10vh",
    },
}

const FroshGridContainer = React.createClass({
    getInitialState: function() {
        return {
            froshList: [],
        }
    },
    componentDidMount: function() {
        this.requestFroshList();
    },
    requestFroshList: function() {
        apiClient.getFroshList()
            .then(function (froshList) {
                //console.log(froshList.filter((frosh) => frosh.dessert_id === 1));
                this.setState({
                    froshList: froshList,
                });
            }.bind(this));
    },
    render: function() {
        return (
            this.state.froshList
            ?
                <FroshGrid froshList={this.state.froshList}/>
            :
                <div style={styles.loading}>
                    <CircularProgress style={styles.center}/>
                </div>
        );
    }
});

export default FroshGridContainer;