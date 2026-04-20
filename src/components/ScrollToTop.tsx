import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to top on route (pathname) changes in the SPA.
 * Respects hash links — if the URL has a hash, let the hash-scroll
 * logic in each page handle navigation to the anchor instead.
 * Also disables the browser's automatic scroll restoration so that
 * refreshing doesn't land users mid-page.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
