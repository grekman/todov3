import React, { PropTypes, Component } from 'react'
import {Button, Icon} from 'react-materialize'

export default class Footer extends Component {
  static propTypes = {
    clearCompleted: PropTypes.func.isRequired
  }
  clearCompl = () => {
    this.props.clearCompleted();
  }

  render() {
      return (
          <footer className="footer">
            <Button waves='light' type="button" className="button__clear" onClick={this.clearCompl}>Clear Completed<Icon right>delete</Icon></Button>
          </footer>
      )
  }
}
