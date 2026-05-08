import { NextResponse } from 'next/server';

export const successResponse = (data: any, message: string = 'Success', status: number = 200) => {
  return NextResponse.json({ success: true, message, data }, { status });
};

export const errorResponse = (message: string = 'Internal Server Error', status: number = 500) => {
  return NextResponse.json({ success: false, message }, { status });
};
