import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import CourseSearch from './components/course_search';
import CourseResults from './components/course_results';

const App = () => {
  return (
    <div>
      <Header />
      <CourseSearch />
      <CourseResults />
      <Footer />
    </div>
  );
};

Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
