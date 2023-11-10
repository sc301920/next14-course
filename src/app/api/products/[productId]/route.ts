import { NextResponse } from "next/server"
import data from "@/data.json"

export async function POST(request: Request, context:any) {
    const { params } = context;
    const product = data.filter(x=>params.productId === x.id.toString())
    return NextResponse.json({
        product
    })
}