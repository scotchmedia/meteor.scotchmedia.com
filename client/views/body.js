
Template.body.absolute = function () {
  return Meteor.absoluteUrl('login');
}

Template.body.events({
  'click a[target=_blank]': function (e, tmpl) {
    e.preventDefault();
    window.open(e.target.href, '_blank');
  }
});
