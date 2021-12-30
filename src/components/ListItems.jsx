import React, { Component } from 'react';
import "./listitem.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export class ListItems extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <span id='mySpan'><super>NOTE:</super> To Edit Task, Click on Text</span>
                
               {this.props.items.map((vals, index)=>{
                   return(
                    
                       <div id='listDiv' key={vals.key}>
                          
                          <p>
                              <span style={{float:"left"}}>{index+1}: </span> 
                              <input type="text" id={vals.key} value={vals.text} onChange={(e)=> this.props.setUpdate(e.target.value, vals.key)}/>
                             
                          <span>
                            <HighlightOffIcon id="deletBtn" onClick={()=> this.props.deleteItem(vals.key)} style={{fontSize:"35"}}/>
                          </span></p> 
                        </div>  
                   )
               })}
                
            </div>
        )
    }
}

export default ListItems;
