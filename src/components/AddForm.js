import React, {Component} from 'react';
import './AddForm.css';


export default class AddForm extends Component{
    constructor(){
        super();

        this.newName = React.createRef();
        this.newPosition = React.createRef();
    }

    savePlayer = (ev) => {
        ev.preventDefault();
        if(this.newName.current.value && this.newPosition.current.value){
            let newPlayer = {id:Date.now(), name:this.newName.current.value, position:this.newPosition.current.value};
            this.props.addPlayer(newPlayer);
            this.newName.current.value = "";
            this.newPosition.current.value = "";
        }else{
            alert("Please fill out the form.");
        }
    }

    render(){
        return(
            <form className="split addForm"> 
            <h1>Add New Player</h1>
                <input className="input-field" placeholder="New Name" ref={this.newName}></input>
                <input className="input-field" placeholder="New Position" ref={this.newPosition}></input>
                <button onClick={this.savePlayer} className="button button-save">Save</button>
            </form>

        )
    }
}