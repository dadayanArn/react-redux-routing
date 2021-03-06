import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { projectInit } from '../../actions'
import './home.styles.css';

const Home = (props) => {
  useEffect(() => {
    props.projectInit()
  }, [])
  return (
    <div className="main">
       Init
    </div>
  );
};

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    projectInit: () => {
      dispatch(projectInit())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);