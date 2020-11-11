import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebarItem/sidebarItem';

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingFile: false,
            title: null
        };
    }
    render() {

        const { notes, classes, selectedFileIndex } = this.props;

        if(notes) { 
            return(
                //                  sidebarContainer class sets the new file to be at the side
                <div className={classes.sidebarContainer}> 
                    <Button
                        onClick={this.newFileBtnClick} //function for the new File botton
                        className={classes.newFileBtn}>{this.state.addingFile ? 'Cancel' : 'New File'}</Button>
                        {
                           this.state.addingFile ? 
                           <div>
                               <input type ='text'
                                    className={classes.newFileInput}
                                    placeholder='Enter File Name'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <Button 
                                    className= {classes.newFileSubmitBtn}
                                    onClick={this.newFile}>Submit File</Button>
                            </div> :
                            null // otherwise return null
                        }
                        <List>
                            { // want to map in all of the files that is being passed into this function through const above
                                notes.map((_note, _index) =>{
                                    return(
                                        <div key={_index}>
                                            <SidebarItemComponent
                                                _note = {_note}
                                                _index = {_index}
                                                selectedFileIndex={selectedFileIndex}
                                                selectFile = {this.selectFile}
                                                deleteFile = {this.deleteFile}>
                                                
                                            </SidebarItemComponent>
                                            <Divider></Divider>
                                        </div>
                                    )
                                })
                            }
                        </List>
                </div>
            );
        } else {
            return(<div></div>)
        }
    }
    newFileBtnClick = () => {
        //need to be flipped to true
        this.setState({ title: null, addingFile: !this.state.addingFile });//title: null, resets the title after another file // addingFile: if thats false then flip it to true, if true then flip it to false
        //console.log('NEW BTN CLICKED'); // demonstrates the functionality in the console "inspect element"
    }
    updateTitle = (txt) => {
        this.setState({ title: txt});
        //console.log('HERE IT IS: ', txt); // logging
    }
    newFile = () => { 
       // console.log(this.state);
       this.props.newFile(this.state.title);
       this.setState({ title: null, addingFile: false })
    }

    selectFile = (n, i) => this.props.selectFile(n,i);
        //console.log('select file');
    
    //deleteFile = () => console.log('delete file');
    deleteFile = (note) => this.props.deleteFile(note);
}

export default withStyles(styles)(SidebarComponent);