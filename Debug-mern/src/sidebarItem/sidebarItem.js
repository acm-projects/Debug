import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers'

class SidebarItemsComponent extends React.Component {
 
    render() {
        const {_index, _note, classes, selectedFileIndex } = this.props;
        return(
        <div key = {_index}>
            
            <ListItem 
                className= {classes.listItem}
                selected={selectedFileIndex === _index} 
                alignItems='flex-start'>
                    <div 
                        className={classes.textSection}
                        onClick={() => this.selectFile(_note, _index)}>
                         <ListItemText
                            primary = {_note.title}
                            secondary = {removeHTMLTags(_note.body.substring(0, 30)) + '...'}>
                         </ListItemText>

                    </div> 
                    <DeleteIcon onClick={() => this.deleteFile(_note)}
                        className={classes.deleteIcon}></DeleteIcon>

            </ListItem>
     
        </div>
        // secondary = {_note.body.substring(0, 30) + '...'}> // limits the total length of string displayed by substring
        );// <listItem> if the current selected is equal to the current item we are on then we can safely say that this is the one that is selected 
    }
    selectFile = (n, i) => this.props.selectFile(n,i);
    deleteFile = (note) => {
        if(window.confirm(`Are you sure you want to delete: ${note.title}`))//`` allow to write in a string and add javascript to string and render afterwards
        {
            this.props.deleteFile(note);
        }
    }
}

export default withStyles(styles)(SidebarItemsComponent);