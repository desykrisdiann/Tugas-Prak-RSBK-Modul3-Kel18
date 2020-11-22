import React, { Component } from "react";
class Child extends Component {
    state = {
        angka: 0
    }

    componentDidMount() {
        alert(`Mount triggered!`)
    }

    tambahAngka = () => {
        this.setState((state) => {
            return { angka: state.angka + 1 }
        }
        )
    }

    kurangAngka = () => {
        this.setState((state) => {
            return { angka: state.angka - 1}
        }) 
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Anda yakin ingin mengubahnya?');
    }

    componentWillUnmount() {
        alert('Hide')
    }

    render() {
        return (
            <div>
               
                <button onClick={this.tambahAngka}>Tambah</button>
                {this.state.angka > 0 ? <button onClick={this.kurangAngka}>Kurang</button> : ''} 
                 <br /> {/*//ternary operator */}
                <span>{this.state.angka}</span>
            </div>
        );
    }
}
export default Child;