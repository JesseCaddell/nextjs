import Head from 'next/head';

export default function LandingPage() {
    return (
        <div>
            <Head>
                <title>Next.js Landing Page</title>
                <meta name="description" content="This is a trial run of Next.js"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header>
                <h1>Welcome to the Landing Page</h1>
            </header>

            {/* Main content sections */}
            <main>
                <section>
                    <h2>First Section</h2>
                    <p>This is where I can dump info and data</p>
                </section>
                <section>
                    <h2>Second Section</h2>
                    <p>This is where I can add even more</p>
                </section>
                <section>
                    <h2>Third Section</h2>
                    <p>An example of more filler</p>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>&copy; {new Date().getFullYear()} My Company</p>
            </footer>
        </div>
    )
}