import { Component } from "react";
import React from "react";
import Child from "./Child";
class Parent extends Component {
    state = {
        komponenMuncul: true
    }

    ubahKomponenMuncul = () => {
        this.setState((state) => {
            return { komponenMuncul: !this.state.komponenMuncul }
        })
    }
    
    render() {
        return (
            <div>
               
                {this.state.komponenMuncul ? <Child /> : ''}
                <button
                    onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ?
                        'hilangkan' : 'munculkan'} komponen!</button>
            </div>
        );
    }
}
export default Parent;