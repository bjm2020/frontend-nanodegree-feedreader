# Project Overview

This project uses the Google feed reader API to demonstrate the use of the jasmine testing
framework.  


## Running The Project

To run the application, simply visit https://bjm2020.github.io/frontend-nanodegree-feedreader/

```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

Open a browser and visit localhost:8080

### Tests

The following tests are included in feedreader.js:

1. RSS Feeds
  a. Test whether sample feeds are defined
  b. Test whether feed url's are not empty
  c. Test whether feed names are not empty

2. The Menu
  a. Test that the menu changes visibility when clicked

3. Initial entries
  a. Test that an entry element is present in the feed container after the feed Loads

4. New Feed Selection  
a.  Test that a new feed is loaded when the feed list is clicked.
