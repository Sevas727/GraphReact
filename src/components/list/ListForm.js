import React from 'react';
import TextInput from '../common/TextInput';

const ListForm = ({item, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Add String</h1>
      <TextInput
        name="Value"
        label="Value"
        value={item.Value}
        onChange={onChange}
        error={errors.title}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ListForm.propTypes = {
  item: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ListForm;
