import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  render() {
    return (
      <div>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </div>
    );
  }
}
