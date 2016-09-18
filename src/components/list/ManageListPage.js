import React, {PropTypes} from 'react';
import ListForm from './ListForm';
import toastr from 'toastr';

export class ManageListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: {Value: ""},
      errors: {},
      saving: false
    };

    this.updateListState = this.updateListState.bind(this);
    this.saveList = this.saveList.bind(this);
  }


  updateListState(event) {
    const field = event.target.name;
    let item = this.state.item;
    item[field] = event.target.value;
    return this.setState({item: item});
  }

    ListFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.item.Value.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


 saveItem(item) {
         return fetch('http://localhost:3333/',
         {
         headers: { 'Content-Type': 'application/json'},
         method: "POST",
         body: JSON.stringify(item)
         })
         .then(
         response => response,
         error => error
         );
 }

    saveList(event) {

    event.preventDefault();

    if (!this.ListFormIsValid()) {
      return;
    }

    this.setState({saving: true});

        this.saveItem(this.state.item)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Item saved');
    this.context.router.push('/');
  }

  render() {
    return (
      <ListForm
        onChange={this.updateListState}
        onSave={this.saveList}
        item={this.state.item}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

//Pull in the React Router context so router is available on this.context.router.
ManageListPage.contextTypes = {
  router: PropTypes.object
};

export default ManageListPage;
