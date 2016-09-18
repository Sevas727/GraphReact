import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemsActions from '../../actions/itemsActions';
import ListComp from './ListComp';
import {browserHistory} from 'react-router';

class ListPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddItemPage = this.redirectToAddItemPage.bind(this);
  }
    componentDidMount() {
        this.props.actions.loadItems();
    }

    redirectToAddItemPage() {
        browserHistory.push('/addItem');
    }

  render() {
    const {items} = this.props;

    return (
      <div>
        <h1>Items</h1>
        <input type="submit"
               value="Add String"
               className="btn btn-primary"
               onClick={this.redirectToAddItemPage}/>
        <ListComp items={items}/>
      </div>
    );
  }
}

ListPage.propTypes = {
    items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
      items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
