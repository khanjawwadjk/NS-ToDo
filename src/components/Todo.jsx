import React, { Component } from 'react';
import "./todo.css";
import AddTaskIcon from '@mui/icons-material/AddTask';
import {Form,Row, Col} from "react-bootstrap";
import ListItems from './ListItems';

export class Todo extends Component {
    constructor(props){
        super(props);

        this.state = ({
            items: [], 
            currItems:{
                text:"",
                key:"",
            }
        });
    }
//
handleInp = (e) =>{
    this.setState({
        currItems:{
            text:e.target.value,
            key:Date.now(),
        }
    })
}

//
addItem = (e) =>{
    e.preventDefault();
    const newItem = this.state.currItems;
    console.log("current items===>",newItem);

    if(newItem.text !== ""){
        const newItems = [...this.state.items, newItem];
        this.setState({
            items: newItems,
            currItems:({
                text:"",
                key:"",
            })
        })
    }
}

//
deleteItem = (key) =>{
    const filteredItems = this.state.items.filter(vals => vals.key !== key);
    this.setState({
        items: filteredItems,
    })
}

//
setUpdate = (text, key) =>{
    const items = this.state.items;
    items.map(item =>{
        if(item.key === key){
            item.text = text;
        }
    })
    this.setState({
        items: items,
    })

}
    
    render() {
        return (
            <div className='main-div'>
                <div className='div1'>
                    <h2>Add Today's Tasks</h2>
                    <hr />
                    <section>
                        <Form>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={6}>
                                <input type="text" placeholder="Write your Task's Here...." value={this.state.currItems.text} id='myInp' onChange={this.handleInp}/><AddTaskIcon id="myBtn" style={{fontSize:"50"}} onClick={this.addItem} />
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                        </Form>
                    </section>
                   
                    <section id='sect2'>
                        <ListItems items = {this.state.items} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}/>
                    </section>
              </div>
            </div>
        )
    }
}

export default Todo;
