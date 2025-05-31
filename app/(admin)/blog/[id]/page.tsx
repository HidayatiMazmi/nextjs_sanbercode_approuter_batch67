// Server Component
// export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
//     const id = (await params).id;
//     return (
//         <div>
//         <h1>Blog Detail Page {id}</h1>
//         <p>Welcome to the blog section of our application.</p>
//         </div>
//     );
// }

// "use client";
// import { useParams } from "next/navigation";

// export default function BlogDetail() {
//     const params = useParams();
//     return (
//         <div>
//         <h1>Blog Detail Page {params.id}</h1>
//         <p>Welcome to the blog section of our application.</p>
//         </div>
//     );
// }

"use client";
import { useParams, useSearchParams } from "next/navigation";

export default function BlogDetail() {
    const params = useParams();
    const search = useSearchParams();
    const query = Object.fromEntries(search.entries());
    return (
        <div>
        <h1>Blog Detail Page {`dynamic: ${params.id}, user: ${query.user}, age: ${query.age}`}</h1>
        <p>Welcome to the blog section of our application.</p>
        </div>
    );
}