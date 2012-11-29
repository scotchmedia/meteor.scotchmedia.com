Template.project.rendered = function () {
  $(function() {
    // We are using jquery to add the class 'prettyprint' to all
    // occurrences of <pre>.
    $('pre').addClass('prettyprint');
    // We then call the prettyPrint function.
    prettyPrint();
  });
};

Template.project.mdContent = function () {
  return Session.get("mdContent");
};

Template.project.section = function () {
  return Session.get("section");
};

Template.project.topic = function () {
  return Session.get("topic");
};
