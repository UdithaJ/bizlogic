import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



export class login extends Component {

    constructor(props){

        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state ={
        
            username: "",
            password: "",
            isValid: ""
            
        }
    }

    componentDidMount(){

        const url = "http://localhost/bizlogic/bizlogic/login.php";
        axios.get(url)
        .then(response => {
            this.setState({ isValid: response.data }
                
            ); 
    })
    // .then(console.log('Checked ',this.state.isValid))

        .catch(err => {
            console.log(err);
        });
        

    }

    onChangeUsername(e){
        this.setState(
            {username: e.target.value}
        );
    }
    
    onChangePassword(e){
        this.setState(
            {password: e.target.value}
        );
    }


    onSubmit(e){
        e.preventDefault();
    

        if (this.state.username === "" || this.state.password === "") {
            console.log("Please fill the required fields!");
            alert("please fill the required fields!")
            
          }
          
        else{

            console.log(this.state.isValid);
            
        const url = "http://localhost/bizlogic/bizlogic/login.php";
    
        const obj = {
            username: this.state.username,
            password: this.state.password
    
        };
 
        axios.post(url,obj)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        // console.log(obj);
        if(this.state.isValid == true){         //to fix - State does not update!
        this.props.history.push('/view');
        }
        else{
            this.props.history.push('/login');
            alert("Invalid username or password!"); 
        }

    }

        
    }

    render() {

        return (
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit = {this.onSubmit}>
               
              

                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="username"  
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        placeholder="Username"
                    />
                </div>
            
              
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password"
                        value={this.state.password}
                        onChange={this.onChangePassword} 
                        placeholder="Password"
                    />
                </div>
               
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>
        </div>
        )
    }
}

export default login
