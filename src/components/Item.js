import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import './Item.css';
import PropTypes from 'prop-types'

export default class Item extends Component{
    constructor(){
        super()
        this.state = {
            active: false
        }
        this.nameRef = React.createRef();
        this.positionRef = React.createRef();
    }

    editSave = (ev) => {
        this.state.active?this.setState({active: false}):this.setState({active: true});
    }

    savePlayer = async () => {
                this.editSave();
                // this.props.player.name = this.nameRef.current.value;
                // this.props.player.position = this.positionRef.current.value;

              await firebase.firestore().collection("favPlayers").doc(JSON.stringify(this.props.player.sortBy)).set({
                    name: this.nameRef.current.value,
                    position: this.positionRef.current.value
                }, {
                    merge: true
                }).then(console.log("works")).catch(function (error) {
                    console.log('error', error);
                })

                this.props.getPlayers()
                
    }

    waivePlayer = () => {
        this.props.deletePlayer(this.props.player.sortBy);
    }

    render(){
        return(
            <li className="item">

            <div className="item-container">
            <h1 className={this.state.active?"hide":null}>{this.props.player.name}</h1>
            <p className={this.state.active?"hide":null}>{this.props.player.position}</p>
            <input className={this.state.active?"input-field":"hide"} defaultValue={this.props.player.name} ref={this.nameRef}></input>
            <input className={this.state.active?"input-field":"hide"} defaultValue={this.props.player.position} ref={this.positionRef}></input>
            </div>

            <div className="button-container">
            <button onClick={this.editSave} className={this.state.active?"hide":"button button-edit"}>Edit</button>
            <button onClick={this.waivePlayer} className={this.state.active?"hide":"button button-delete"}>Delete</button>
            <button onClick={this.savePlayer} className={this.state.active?"button button-save":"hide" }>Save</button>
            </div>

            </li>

            
        )
    }
}

// Item.propTypes = {
//     player: PropTypes.shape({
//         name: PropTypes.string,
//         position: PropTypes.string,
//         id: PropTypes.number.isRequired
//     })
// }

// Item.defaultProps = {
//     player: {
//         name: "Unknown",
//         position: "Sixth Man",
//         id: 0
//     }
// }