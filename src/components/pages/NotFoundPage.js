import React from 'react';

// Custom components
import AppHeader from '../AppHeader';
import Footer from '../Footer';

/**
 * Page component showed when no route is found.
 */
function NotFoundPage() {
  return (
    <span>
      <AppHeader />

      <h1 style={{ marginTop: 100 }}>Page Not Found</h1>

      <Footer />

    </span>
  );
}

export { NotFoundPage };
