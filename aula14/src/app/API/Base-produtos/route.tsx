import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(){

    const file = await fs.readFile( process.cwd() + "/src/Data/base.json" , "utf-8" )
    // Pasear Arq
    const produtos = JSON.parse(file);
    return NextResponse.json(produtos);
}

