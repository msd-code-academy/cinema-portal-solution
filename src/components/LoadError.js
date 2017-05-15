import React, {PropTypes} from 'react';
import {Message, Button} from 'semantic-ui-react';

const LoadError = (props) => {
  return (
    <Message negative>
      <Message.Header>{props.title}</Message.Header>
      <p>{props.error.message}</p>
      <Button loading={props.isLoading} basic color='red'
              onClick={props.onReload}>reload</Button>
    </Message>
  );
};

LoadError.propTypes = {
  title: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  onReload: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default LoadError;