import React,{Component} from 'react';




class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    

    render(){
        return(
            <div className='login-page'>
            <form className='login-form'>
            
                <input placeholder="e-mail" name='email' onChange={this.props.isValid}/>
                <input placeholder="phone number" name='phone' onChange={this.props.isValid}/>
                <input placeholder="blog name" name='blog' onChange={this.props.isValid}/>
            </form>
            </div>
        )
    }
}

export default Form;
