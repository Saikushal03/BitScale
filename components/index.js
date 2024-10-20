// pages/index.js
import Head from 'next/head';
import MyComponent from '../components/MyComponent';

export default function Home() {
    return (
        <div>
            <Head>
                <title>My UI Component</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Welcome to My UI Component</h1>
                <MyComponent />
            </main>
        </div>
    );
}