const styles = theme => ({
    root: {
      color: 'white',
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    newFileBtn: {
      width: '100%',
      height: '35px',
      borderBottom: '1px solid black',
      borderRadius: '0px',
      backgroundColor: '#890023',
      color: 'white',
      '&:hover': {
        backgroundColor: '#1A73E8'
      }
    },
    sidebarContainer: {
      marginTop: '0px',
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'scroll',
      overflowX: 'hidden',
      backgroundColor: '#001528',
      color: 'white',

    },
    newFileInput: {
      width: '100%',
      margin: '0px',
      height: '35px',
      outline: 'none',
      border: 'none',
      paddingLeft: '5px',
      '&:focus': {
        outline: '2px solid rgba(81, 203, 238, 1)'
      }
    },
    newFileSubmitBtn: {
      width: '100%',
      backgroundColor: '#890023',
      borderRadius: '0px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#1A73E8'
      }
    },
    selectedFile: {
      backgroundColor: '#001528',
      '&:hover': {
        backgroundColor: '#1A73E8'
      }

    }
  });
  
  export default styles;