import React from 'react';

class App extends React.Component {
    edit(){
        this.setState({ editing : true });
    }
    remove(){
       this.props.callRemove(this.props.index); 
    }
    save(){
        this.props.callUpdate(this.refs.newText.value,this.props.index);
        this.setState({ editing : false });
    }
    reset(){
        this.refs.newText.value = this.props.children;
    }
    constructor(props)
    {
        super(props);
        this.state = {
            editing : false
        }

        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
    }

    renderNormal()
    {
      return (
            <div>
                <h4>{this.props.children}</h4>
                <div className="row">
                    <div className="col-sm-1">
                        <button onClick={this.edit} className="btn btn-sm btn-info">Edit</button>
                    </div>
                    <div className="col-sm-1">
                        <button onClick={this.remove} className="btn btn-sm btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        );
    }

    renderForm()
    {
        return (
            <div>
                <br/>
                <textarea ref="newText">{this.props.children}</textarea>
                <div className="row">
                    <div className="col-sm-1">
                        <button onClick={this.save} className="btn btn-sm btn-success">Save</button>
                    </div>
                    <div className="col-sm-1">
                        <button onClick={this.reset} className="btn btn-sm btn-warning">Reset</button>
                    </div>                    
                </div>
            </div>
        );      
    }

    render() {
        if(this.state.editing)
        {
          return  this.renderForm();
        }
        else
        {
          return  this.renderNormal();
        }
    }
}
export default App;