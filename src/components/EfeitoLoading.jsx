import React from "react";
import Loader from "react-loader-spinner";

export default class EfeitoLoading extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#E1911A"
        height={100}
        width={100}
        timeout={4000}
      />
    );
  }
}
