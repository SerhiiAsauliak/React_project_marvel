import React from "react";
import { ErrorMessage } from "../errorMessage/errorMessage";

export class ErrorBoundary extends React.Component {
   state ={
      error: false
   }

   componentDidCatch(error, info) {
      console.log(error, info);
      this.setState({error: true})
   }

   render() {
      if(this.state.error){
         return <ErrorMessage/>
      }
      return this.props.children;
  };
};