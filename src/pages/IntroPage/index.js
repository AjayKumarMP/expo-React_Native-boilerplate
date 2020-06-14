import React from "react";
import { connect } from "react-redux";
import { init } from "./actions";
import { getUserDetails } from "./actions";
import IntroHome from "./introHome";

const mapStateToProps = (state) => {
    console.log("?????????????", state)
  return {
    userDetails: state.introReducer.user,
  };
};

const mapDispatchToProps = (dispatch, router) => ({
  init: () => dispatch(init),
  getUserDetails: () => dispatch(getUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IntroHome);
