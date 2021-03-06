import React from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamForm extends React.Component {


    renderInput = ({input, label, meta})=>{
        const className = `field ${meta.error && meta.touched ? 'error':''}`
        return (<div className={className}>
                <label>{label}</label>
                <input autoComplete="off" {...input}/>
                <div>{this.renderError(meta)}</div>
                </div>)
    }
    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
    }
    renderError({touched, error}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    render(){
        // field some type of an input - radiobutton or checkbox
        return (<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                    <Field name="title"  component={this.renderInput} label="Enter Title" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <button className="ui button primary">Submit</button>
                </form>)
    }
}


const validate = formValues =>{
    const errors ={}
    if(!formValues.title){
        errors.title = 'You must enter a title'
    }
    if(!formValues.description){
        errors.description = 'You must enter a description'
    }
    return errors;
}
export default reduxForm({
    form:'streamForm',
    validate
})(StreamForm)

