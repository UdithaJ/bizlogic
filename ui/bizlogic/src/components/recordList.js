import React, { Component } from 'react'

class recordList extends Component{

    render(){

        return(

            <tr>
            <td>
                {this.props.obj.id}
            </td>
            <td>
                {this.props.obj.name}
            </td>
            <td>
                {this.props.obj.username}
            </td>
            <td>
                {this.props.obj.email}
            </td>
        </tr>

        );
    }
}