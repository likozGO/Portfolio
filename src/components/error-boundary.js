import React, { Component } from 'react';

import ErrorApplicationCrash from '../pages/error-application-crash';

class ErrorBoundary extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) return <ErrorApplicationCrash />;

    return children;
  }
}

export default ErrorBoundary;
