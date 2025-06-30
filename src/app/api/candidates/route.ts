import { NextRequest, NextResponse } from "next/server";
import { mockCandidates } from "./data";

export async function GET(_req: NextRequest) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return NextResponse.json({ candidates: mockCandidates });
} 