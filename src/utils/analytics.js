/**
 * Thin wrapper around GA4's gtag so components never call window.gtag directly.
 * Guards against gtag not yet being loaded (e.g. during local dev or if blocked).
 */

const gtag = (...args) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

/**
 * Send a pageview hit.
 * @param {string} [path] - URL path to record (defaults to current location).
 * @param {string} [title] - Page title (defaults to document.title).
 */
export function trackPageView(path = window.location.pathname, title = document.title) {
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  })
}

/**
 * Send a custom event.
 * @param {string} eventName - GA4 event name (snake_case recommended).
 * @param {object} [params]  - Additional event parameters.
 */
export function trackEvent(eventName, params = {}) {
  gtag('event', eventName, params)
}
