import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
//////////////
import hljs from 'highlight.js'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.bubble.css'
import 'highlight.js/styles/darcula.css'
////////////////


hljs.configure({
  languages: ['javascript', 'java', 'python', 'c++'],
})


class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: `<code><pre>	public class HelloWorld {
              public static void main(String[] args) {
                  System.out.println("Hello World!");
              }
          }
          </pre></code>`,
            title: '',
            id: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
    this.setState({ 
      text: this.props.selectedFile.body,
      title: this.props.selectedFile.title,
      id: this.props.selectedFile.id})
  }


    //life cycle hooks
    componentDidMount = () => {
    this.setState({
      text: this.props.selectedFile.body,
      title: this.props.selectedFile.title,
      id: this.props.selectedFile.id
    });
  }

  componentDidUpdate = () => {
    if(this.props.selectedFile.id !== this.state.id) {
      this.setState({
        text: this.props.selectedFile.body,
        title: this.props.selectedFile.title,
        id: this.props.selectedFile.id
      });
    }
  }

  modules = {
    syntax: {
      highlight: text => hljs.highlightAuto(text).value,
    },
    toolbar: [
      ['code-block']
    ],
    history: {
      userOnly: true
    }
  }

  formats = [
    'code-block'
  ]
  

    render(){


        
        const {classes } = this.props;
        //Quill Editor Component
        return(
            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                <input //openining tag // on change will automatically pass the event and pass the title 
                  className={classes.titleInput}
                  placeholder='File title..'
                  value = {this.state.title ? this.state.title : ''}
                  onChange={(e) => this.updateTitle(e.target.value)}> 
                </input>
                <ReactQuill 

                //this.updateBody is going to bea function that is gonna be asynchronous, that is going to set the state. once the state updates do some stuff
                theme = "bubble"
                modules={this.modules}
                formats={this.formats}
                value={this.state.text} // value is value of the react quill, uses value to render
                onChange= {this.updateBody}> 


                </ReactQuill>
            
            </div>
            );
    }
    updateBody = async (val) => {
        await this.setState({text: val});
        this.update();

    };
    updateTitle = async (txt) => { 
       await this.setState({title: txt}) // update the body
       this.update(); // debounce effect
    }
    //very important this is the sync here
    update = debounce(() => { //each time it tries to call update again, in essence each time it cancels the last one, until the user stops typing and the function will go all the way through and the update is complete  // wanna wait for the user for one and half second to sync
        //console.log('UPDATING DATABASE');
        //come back later
        this.props.fileUpdate(this.state.id, {
          title: this.state.title, // the state is called from the constructor above
          body: this.state.text
        })
    }, 1000);
}
// this.props
export default withStyles(styles)(EditorComponent);