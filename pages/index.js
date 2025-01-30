import Link from 'next/link';

export default function Home() {
    return ( <
        div className = "flex flex-col items-center justify-center min-h-screen bg-green-100" >
        <
        h1 className = "text-4xl font-bold text-green-600" > Welcome to Baghbaan < /h1> <
        Link href = "/signup" >
        <
        button className = "mt-4 px-6 py-2 bg-green-500 text-white rounded-lg" > Get Started < /button> <
        /Link> <
        /div>
    );
}