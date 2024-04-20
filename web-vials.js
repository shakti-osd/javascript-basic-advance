/*
Web vitals are a set of metrics that measure the performance and user experience of a web page. They are designed to provide developers with a common set of metrics to focus on, in order to improve the overall user experience of their web pages. The three main web vitals are:

1. Largest Contentful Paint (LCP): measures the loading performance of a page, by recording the time it takes for the largest image or text block to load.

2. First Input Delay (FID): measures the interactivity of a page, by recording the time it takes for a page to become responsive to user input.

3. Cumulative Layout Shift (CLS): measures the stability of a page, by recording the amount of layout shift that occurs during the loading process.

To measure any of the supported metrics, you only need to pass a function into the reportWebVitals function in index.js:

reportWebVitals(console.log);



function sendToAnalytics({ id, name, value }) {
  ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);

*/
