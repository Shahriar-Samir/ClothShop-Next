import { NextResponse } from 'next/server';

const GET = (req) => {
    const url = new URL(req.url)
    const params = new URLSearchParams(url.searchParams)
    console.log(params.get('_id'))
    return new NextResponse('okay')
};

export  {GET};