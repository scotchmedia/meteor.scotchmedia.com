(function () {

  function track() {
    _gaq.push(['_trackPageview',
              window.location.pathname +
              window.location.search +
              window.location.hash]);
  }

  function projects() {
    track();
    Session.set('section', 'Projects');
    //return 'projects';
  }

  function project(slug) {
    var url = '/md/projects/' + slug + '.md';
    Meteor.http.call("GET", url, function (error, result) {
      Session.set('mdContent', result.content);
    });
    Session.set('slug', slug);
    Session.set('section', 'Projects');
    track();
    return 'project';
  }

  function tutorials(book, chapter, lesson) {
    track();
    return 'tutorials';
  }

  function tutorial(topic, book, chapter, lesson) {
    var arr = [topic];
    if (typeof book !== 'undefined') {
      arr = arr.concat(book);
    }
    if (typeof chapter !== 'undefined') {
      arr = arr.concat(chapter);
    }
    if (typeof lesson !== 'undefined') {
      arr = arr.concat(lesson);
    }
    var url = '/md/tutorials/' + arr.join('/') + '.md';
    var tocUrl = '/md/tutorials/' + topic + '/' + book + '/toc.md';
    Meteor.http.call("GET", url, function (error, result) {
      Session.set('mdContent', result.content);
    });
    Meteor.http.call("GET", tocUrl, function (error, result) {
      Session.set('mdToc', result.content);
    });
    Session.set('section', 'Tutorials');
    Session.set('topic', topic);
    Session.set('book', book);
    Session.set('chapter', chapter);
    Session.set('lesson', lesson);
    track();
    return 'tutorial';
  }

  Meteor.Router.add({
    '/': 'home',
    '/contact': 'contact',
    '/projects': projects,
    '/projects/:slug': project,
    '/tutorials': tutorials,
    '/tutorials/:topic/:book': tutorial,
    '/tutorials/:topic/:book/:chapter': tutorial,
    '/tutorials/:topic/:book/:chapter/:lesson': tutorial
  });

  Meteor.startup(function () {
    Meteor.autorun(function () {
      // grab the current page from the router, so this re-runs every time it changes
      //Meteor.Router.page();
    });
  });

}());
