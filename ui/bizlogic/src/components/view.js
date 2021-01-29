import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import recordList from './recordList';
import axios from 'axios';

export class view extends Component {


    constructor(props){

        super(props);
    
        this.state ={
        
           users: []
            
        };
    }


    componentDidMount(){

        const url = "http://localhost/bizlogic/bizlogic/view.php";
        axios.get(url)
        .then(response => {
            this.setState({ users: response.data }
                
            ); 
    })
    // .then(console.log('Checked ',this.state.isValid))

        .catch(err => {
            console.log(err);
        });    

    }

    usersList(){

        return this.state.users.map(function(object,i){
            return <recordList obj = {object} key={i} />


        });
    }


    render() {
        return (
            <div>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Userame</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.usersList()}
                    </tbody>



                </table>


            </div>
        )
    }
}

export default view






