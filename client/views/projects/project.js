//Template["client/views/project"]rendered = function () {
//  $(function () {
//    // We are using jquery to add the class 'prettyprint' to all
//    // occurrences of <pre>.
//    $('pre').addClass('prettyprint');
//    // We then call the prettyPrint function.
//    prettyPrint();
//  });
//};
Template["client/views/projects/project"].helpers({
  mdContent: function () {
    return Session.get("mdContent");
  },
  section: function () {
    return Session.get("section");
  },
  topic: function () {
    return Session.get("topic");
  }
})
