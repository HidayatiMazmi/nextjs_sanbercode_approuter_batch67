import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    console.log('req =>', searchParams.get('name'));
    return NextResponse.json({message: 'Hello from the posts API'},{status: 200});
}

export async function POST(req: Request) {
    const body = await req.json();
    // console.log('body =>', body);
    return NextResponse.json({payload: body}, {status: 200});
}

export async function PUT(req: Request) {
    const body = await req.json();
    console.log('body =>', body);
    return NextResponse.json({message: 'Post updated successfully', data: body}, {status: 200});
}

export async function DELETE(req: Request) {
    const {searchParams} = new URL(req.url);
    const postId = searchParams.get('id');
    console.log('Deleting post with id =>', postId);
    return NextResponse.json({message: `Post with id ${postId} deleted successfully`}, {status: 200});
}