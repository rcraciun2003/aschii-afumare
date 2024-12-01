// pages/_app.tsx
import React from 'react';
import Layout from '/components/Layout'; // Adjust the path if needed
import '../app/globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
