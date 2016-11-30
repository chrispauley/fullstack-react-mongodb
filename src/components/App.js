import React from 'react';
import Header from './Header';
import Contest from './Contest';
import ContestList from './ContestList';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    componentDidMount() {
    }
    componentWillUnmount() {
        console.log('will unmount');
    }
    fetchContest = (contestId) => {
      pushState(
        { currentContestId: contestId},
        `/contest/${contestId}`
      );
      // lookup the contest
      api.fetchContest(contestId).then(contest => {
        this.setState({
          pageHeader: contest.contestName,
          currentContestId: contest.id,
          contests: {
            ...this.state.contests,
            [contest.id]: contest
          }
        });
      });
    };
    currentContent() {
      if (this.state.currentContestId) {
        return <Contest {...this.state.contests[this.state.currentContestId]} />;
      }
      return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />;
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                {this.currentContent()}
            </div>
        );
    }
}

App.propTypes = {
  initialContests: React.PropTypes.object
};

export default App;
