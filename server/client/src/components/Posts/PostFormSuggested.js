import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import GeneralField from './GeneralField';


class PostFormSuggested extends Component {
  render() {
    return (
      <div>
          <Field label="Title" type="text" name="title" component={GeneralField} />
          <Field label="Subject" type="text" name="subject" component={GeneralField} />
          <Field label="Body" type="text" name="body" component={GeneralField} />
          <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
            <button type="submit">Submit</button>
          </form>
      </div>

    );
  }
}




export default reduxForm({
  form: 'PostFormSuggested'
})(PostFormSuggested);
