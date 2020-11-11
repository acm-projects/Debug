const styles = theme => ({
    listItem: {
      color: 'white',
      cursor: 'pointer'
    },
    textSection: {
      maxWidth: '85%',
      color: 'white'
    },  
    deleteIcon: {
      position: 'absolute',
      right: '5px',
      top: 'calc(50% - 15px)',
      '&:hover': {
        color: 'red'
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