/**
 * Thin wrapper around GA4's gtag so components never call window.gtag directly.
 * Guards against gtag not yet being loaded (e.g. during local dev or if blocked).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const gtag = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

/**
 * Send a pageview hit.
 * @param path - URL path to record (defaults to current location).
 * @param title - Page title (defaults to document.title).
 */
export function trackPageView(path = window.location.pathname, title = document.title) {
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  })
}

/**
 * Send a custom event.
 * @param eventName - GA4 event name (snake_case recommended).
 * @param params - Additional event parameters.
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  gtag('event', eventName, params)
}
