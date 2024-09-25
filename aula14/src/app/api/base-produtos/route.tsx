import { NextResponse } from "next/server";

const dados = [
    { id: 1, nome: "napolitano", qtd: 1000 },
    { id: 2, nome: "vinho", qtd: 2000 },
    { id: 3, nome: "abacaxi", qtd: 1000 },
    { id: 4, nome: "morango", qtd: 1000 },
    { id: 5, nome: "mexerica", qtd: 1000 },
    { id: 6, nome: "creme", qtd: 10000 },
];

export async function GET(){
    return NextResponse.json(dados);
}