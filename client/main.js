import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import CourseSearch from './components/course_search';

const App = () => {
  return (
    <div>
      <Header />
      <CourseSearch />
      <Footer />
    </div>
  );
};

Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
