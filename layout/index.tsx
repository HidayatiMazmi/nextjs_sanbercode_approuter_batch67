import Link from "next/link";

export default function MainLayout({ 
    children
} : { 
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className="flex flex-col min-h-screen"
            >
                <header className="bg-blue-600 text-white">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-bold">
                            Next.js App
                        </h1>
                        <ul className="flex space-x-4 p-4">
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="flex-1 container mx-auto p-4">
                        {children}
                </main>
                <footer className="bg-gray-800 text-white p-4">
                    <div className="container mx-auto text-center">
                        <p>&copy; {new Date().getFullYear()} Next.js App</p>
                    </div>
                </footer>

            </div>
        </>
    );
}