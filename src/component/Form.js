import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../action/formAction'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            post: ''       
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault() 
        const newData = {
            post: this.state.post
        }
        this.props.dispatch(addPost(newData))
        this.setState ({
            post: ''
        })
    }

    render() {
        return (
            <div>
                
                <div>
                    <h2> Component </h2> 
                    <form onSubmit={this.handleSubmit}> 
                        <div>
                            <label htmlFor='post'></label> 
                            <input type= 'text' 
                                    name= 'post'
                                    value= {this.state.post} 
                                    onChange= {this.handleChange} 
                                    placeholder= 'Enter Text' 
                            />
                        </div>
                        <br/>          
                        <input type='submit' value='Submit'/>
                    </form>
                </div> 

                <h2> Result </h2>
                
                <div>
                {
                    this.props.post.map((ele, i) =>{
                        return (
                            <div key={i}>
                                <h2> {ele.post.split('').reverse()} </h2>
                            </div>
                        )
                    })
                }
                </div>
               
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return{
        post: state.post
    }
}
export default connect(mapStateToProps)(Form)




