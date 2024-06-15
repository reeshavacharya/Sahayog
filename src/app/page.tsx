import Navbar from '@app/components/Header/navbar';

export default function Home() {
    return (
        <>
            <div
                style={{
                    color: 'black',
                    background: 'linear-gradient(to bottom, white, #b2f5ea)'
                }}
            >
                <main className="flex min-h-screen flex-col">
                    <Navbar />
                </main>
            </div>
        </>
    );
}
