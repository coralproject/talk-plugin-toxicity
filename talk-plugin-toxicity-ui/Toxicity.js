import React from 'react';

const name = 'talk-plugin-toxicity';

export default class Toxicity extends Component {

  render() {
    return (
      <script src="https://apis.google.com/js/platform.js"></script>
      <script src="https://apis.google.com/js/api.js"></script>
      <convai-checker inputId={`$(inputId)`} configuration="demo" apiKey={`$(apiKey)`}></convai-checker>
    );
  }
}
