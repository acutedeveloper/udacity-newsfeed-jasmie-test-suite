/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         allFeeds.forEach(function(item) {
           it('Object item URL is defined and is not empty', function() {
             expect(item.url).toBeDefined();
             expect(item.url.length > 0).toBe(true);
           });

           it('Object item name is defined and is not empty', function() {

            // This is to ensure that whitespace is not counted as content
             var nameTrimmed = item.name.trim();

             expect(nameTrimmed).toBeDefined();
             expect(nameTrimmed.length > 0).toBe(true);
           });

         })

    });


    describe('The menu', function() {

      const menuIcon = $('.menu-icon-link');
      const domBody = document.body;

      it('Menu hidden by default', function() {

        expect(domBody.classList.contains("menu-hidden")).toBe(true);

      });

      it('Menu is visible after menu click', function() {
        menuIcon.trigger('click');
        expect(domBody.classList.contains("menu-hidden")).toBe(false);

        menuIcon.trigger('click');
        expect(domBody.classList.contains("menu-hidden")).toBe(true);

      });

    })

   describe('Iniital Entries', function() {

     beforeEach(function(done) {

       loadFeed(0, function(){
         done();
       });

     });

     it('Feed Container has one entry', function(done) {

       // After the loadFeed() function runs there is one .entry item in the list
       const feedEntries = document.querySelectorAll('.feed .entry');

       expect(feedEntries.length > 0).toBe(true);
       done();

     });

   });

  /* TODO: Write a new test suite named "New Feed Selection" */

  let firstItem = '';

   describe('New Feed Selection', function() {

     // Running loadfeed twice inside this test suite to ensure that this is not
     // dependent on the other tests.

      beforeEach(function(done) {

        // We first refresh the feed inside this suite
        loadFeed(0, function() {
          // Get the initial fisrt item before we change the list of entries
          firstItem = document.querySelector('.entry').innerText;

          loadFeed(2, function() {
            done();
          });
        });

      });

      it('Content Change in the load feed', function(done) {

        // we're now getting the new list of entries that have changed
        const newFirstItem = document.querySelector('.entry').innerText;

        expect( newFirstItem === firstItem ).not.toBe(true);
        done();

      });

   });
}());
