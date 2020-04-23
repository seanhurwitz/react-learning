import React, { Fragment, Component } from 'react';
import { Modal } from '../../components';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };
    reqInterceptor = axios.interceptors.request.use((req) => {
      this.setState({ error: null });
      return req;
    });
    resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        this.setState({ error });
        return Promise.reject(error);
      },
    );
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    // componentDidMount() {
    //   axios.interceptors.request.use((req) => {
    //     this.setState({ error: null });
    //     return req;
    //   });
    //   axios.interceptors.response.use(
    //     (res) => res,
    //     (error) => {
    //       this.setState({ error });
    //       return Promise.reject(error);
    //     },
    //   );
    // }

    render() {
      return (
        <Fragment>
          <Modal show={!!this.state.error} clicked={this.errorConfirmedHandler}>
            {this.state.error && this.state.error.message}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
