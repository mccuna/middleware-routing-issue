import { NextResponse } from 'next/server';

export const middleware = () => {
    return NextResponse.next();
}