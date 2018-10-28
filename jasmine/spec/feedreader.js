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


    /* TODO: Write a new test suite named "The menu" */

    const menuIcon = $('.menu-icon-link');
    const menuLink = $('.feed-list a');
    const domBody = document.body;

    describe('The menu', function() {

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */

      it('Menu hidden by default', function() {

        // We want to check that the body does not have the class "menu-hidden"
        // get the body
        // get its class list

        expect(domBody.classList.contains("menu-hidden")).toBe(true);

      });


     /* TODO: Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */

      it('Menu is visible after menu click', function() {
        menuIcon.trigger('click');
        expect(domBody.classList.contains("menu-hidden")).toBe(false);

        menuIcon.trigger('click');
        expect(domBody.classList.contains("menu-hidden")).toBe(true);

      });

    })



    /* TODO: Write a new test suite named "Initial Entries" */

   describe('Iniital Entries', function() {

     beforeEach(function(done) {

       loadFeed(0, function(){
         done();
       });

     });

     /* TODO: Write a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      * Remember, loadFeed() is asynchronous so this test will require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */

     it('Feed Container has one entry', function(done) {

       // After the loadFeed() function runs there is one .entry item in the list
       const feedEntries = document.querySelectorAll('.entry');
       feedEntries.length;

       expect(feedEntries.length > 0).toBe(true);
       done();

     });

   });

  /* TODO: Write a new test suite named "New Feed Selection" */

  let firstItem = '';

   describe('New Feed Selection', function() {

     /* TODO: Write a test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      * Remember, loadFeed() is asynchronous.
      */


      beforeEach(function(done) {

        // Get the initial fisrt item before we change the list of entries
        firstItem = document.querySelector('.entry').innerText;

        $('.feed').empty();

        loadFeed(2, function(){
          done();
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
