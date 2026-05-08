import { NextResponse } from 'next/server';

export async function GET() {
  const stats = [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Projects Completed", value: 500, suffix: "+" },
    { label: "Happy Clients", value: 300, suffix: "+" },
    { label: "Support", value: 24, suffix: "/7" }
  ];
  return NextResponse.json({ success: true, data: stats }, { status: 200 });
}
