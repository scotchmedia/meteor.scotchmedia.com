(function () {

  // Navigation helpers
  
  var isNavActive = function (page, matchTop) {
    var isActive = false;

    // If desired check that the top level matches
    if (matchTop) {
      var pathTop = page.split('/')[0];
      var currentPageTop = Meteor.Router.page().split('/')[0];
      if (pathTop === currentPageTop || _.contains(pathTop.split('|'), currentPageTop))
        isActive = true;
    }
    
    // Is it a perfect match
    var currentPage = Meteor.Router.page();
    if (currentPage === page)
      isActive = true;
    
    return isActive;
  };

  Handlebars.registerHelper('isActive', function (page) {
    return isNavActive(page, false) ? 'active' : '';
  });

  Handlebars.registerHelper('isActiveTop', function (page) {
    return isNavActive(page, true) ? 'active' : '';
  });

  Handlebars.registerHelper('marked', function (content) {
    if (content) {
      return marked(content);
    }
    return '';
  });

})();
