import React from "react";
import { connect } from "react-redux";

class Clients extends React.Component {
  render() {
    const { logged } = this.props
    return (
      <>
        { !logged ? 'VOCE AINDA NAO FEZ O LOGIN' :  `        Clients
        Nenhum cliente cadastrado
        REGISTER`}
      
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  logged: state.userLoggedReducer.logged,
})

export default connect(mapStateToProps, null)(Clients);
