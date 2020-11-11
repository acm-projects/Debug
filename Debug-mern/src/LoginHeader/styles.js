//import { Hidden } from "@material-ui/core";

const styles = theme => ({
    header: {
       display: 'flex',
       alignItems: 'center',
       backgroundColor: '#3f5d9a',
       overflow: 'hidden',
       height: '83px'
      },
      
      headerTop: {
        display: 'flex',
        width: '100',
        height: '111px'
      },
      
      headerTop__logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '20px'
      },
      
      header__Logo: {
        height: '78px',
        objectFit: 'contain',
        marginTop: '10px',
        marginLeft: '70px'
      },
      
      header__button: {
          width: '138px',
          height: '30px',
          fontWeight: '400',
          paddingTop: '7px',
          borderRadius: '2px',
          backgroundColor: '#42b77a',
          border: 'none',
          position: 'relative',
          float: 'left',
          display: 'flex',
          marginRight: '770px',
          '&:hover': {
            backgroundColor: '#32971e'
          }
      },

 


      
      headerTop__navbar: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column'
      },
      
      headerTop__seperator: {
        width: '100',
        border: 'none',
        height: '2px',
        marginTop: '2px',
        backgroundColor: 'yellow'
      },
      
      headerTop__navigation: {
        display: 'flex',
        flex: '1',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '55px'
      },
      
      headerBottom: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '6px',
      },
      
      headerBottom__email: {
        marginRight: '55px'
      },
      
      headerBottom__phone: {
        marginRight: '65px'
      },
      
      headerBottom__bag: {
        position: 'absolute',
        display: 'flex'
      },
      
      headerBottom__bagIcon: {
        position: 'relative',
        display: 'flex',
        left: '-5px',
        width: '30px',
        height: '30px',
      },
      
      headerBottom__bagCount: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'RobotoRegular',
        right: '0px',
        top: '-5px',
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '10px',
        color: 'white'
      }
})

export default styles;