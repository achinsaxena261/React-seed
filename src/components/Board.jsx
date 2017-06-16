import React from 'react';
import App from './App.jsx';

class Board extends React.Component {  
    removeText(index){
       var arr = this.state.content;
       arr.splice(index,1);
       this.setState({content : arr});
    }
    updateText(newText,index){
       var arr = this.state.content;
       arr[index] = newText;
       this.setState({content : arr});
    } 
    createText(){
       var arr = this.state.content;
       arr.push("default text");
       this.setState({content : arr});
    }        
    constructor() {
        super();
        this.state = {
            content: [
                "this is react code",
                "awesome way to render",
                "but angular is best"
            ]
        }
        this.removeText = this.removeText.bind(this);
        this.updateText = this.updateText.bind(this);
        this.createText = this.createText.bind(this);
    }
    render() {
        return(
            <div className="container">
                <br/>
                <button className="btn btn-primary" onClick={this.createText}>Create</button>
                { this.state.content.map((value,i) => 
                <App key={i} index={i} callRemove={this.removeText} callUpdate={this.updateText}>{value}</App> )}
            </div>
        );
    }
}
export default Board;