/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectGoal,
  makeSelectGoals,
  makeSelectMainPage,
} from './selectors';
import { typingGoal, saveGoal, fetchGoals, clearInputBox } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import FormWrapper from './FormWrapper';
import FormTitle from './FormTitle';
import InputBox from './InputBox';

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Goal Slayer</title>
          <meta name="description" content="MainPage of the goal slayer" />
        </Helmet>
        <FormWrapper
          onSubmit={e => {
            this.props.onSubmitGoal(e, this.props.goal);
            this.props.getGoals();
          }}
        >
          <FormTitle>
            <FormattedMessage {...messages.header} />
          </FormTitle>
          <InputBox
            type="text"
            onChange={this.props.onTypingGoal}
            value={this.props.goal}
            placeholder="ex. Learning new languages"
          />
        </FormWrapper>
      </div>
    );
  }
}

MainPage.propTypes = {
  goal: PropTypes.string,
  onTypingGoal: PropTypes.func,
  onSubmitGoal: PropTypes.func,
  getGoals: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
  goal: makeSelectGoal(),
  goals: makeSelectGoals(),
});

function mapDispatchToProps(dispatch) {
  return {
    onTypingGoal: e => dispatch(typingGoal(e.target.value)),
    onSubmitGoal: (e, goal) => {
      e.preventDefault();
      dispatch(saveGoal(goal));
      dispatch(clearInputBox());
    },
    getGoals: () => {
      dispatch(fetchGoals());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPage);
