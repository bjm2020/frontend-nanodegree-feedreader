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

        //Test to be sure that url's are defined and that it is a url
        it('url defined and not empty', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.trim()).not.toBe('');
                expect(feed.url).not.toBe(null);
                //Test that the url is a valid url
                expect(feed.url).toContain("http");
                //Test that the url is a string
                expect(feed.url).toEqual(jasmine.any(String));
            });
        });

        //Test that a name is present in the allFeeds list, it is defined, and in
        //the correct format
        it('name is defined and not empty', function() {

            allFeeds.forEach(function(feed) {

                expect(feed.name).toBeDefined();
                expect(feed.url.trim()).not.toBe('');
                expect(feed.name).not.toBeNull();
                //test that the name is a string
                expect(feed.name).toEqual(jasmine.any(String));
            });
        });
    });

    describe('The menu', function() {

        it('is not visible by default', function() {
            expect(($('body,html').hasClass('menu-hidden'))).toEqual(true);
        });

        //Test that the menu changes visibility when clicked
        it('changes visibility when clicked', function() {
            //grab the menu icon link
            var button = $('.menu-icon-link');
            button.click(); //Click button
            //Make sure that the body element doesn't have a menu hidden class
            expect(($('body,html').hasClass('menu-hidden'))).toEqual(false);
            button.click();
            expect(($('body,html').hasClass('menu-hidden'))).toEqual(true);
        });

    });

    describe('Initial Entries', function() {
        //Invoke the loadFeed method and do not proceed until asynchronous data is loaded.
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        //Check if at least one entry element is in the feed after load.
        it('entry element is in the feed container after load', function() {

            var feeds = $('.feed .entry').length;
            expect(feeds).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        var firstFeed;
        var secondFeed;
        //Invoke the loadFeed method twice.  Do not proceed until asynchronous data is loaded.
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                loadFeed(1, function() {
                    secondFeed = $('.feed').html();
                    done();
                });
            });
        });
        //Compare the two feeds. Check that a new feed is loaded.
        it('new feed is loaded', function() {
            expect(firstFeed).toBeDefined();
            expect(secondFeed).toBeDefined();
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });
}());
