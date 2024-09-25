import Link from "next/link";

export default function Produtos() {

    const lista = [
        { id: 1, nome: "Espada do Rei Destruído", preco: 3200 },
        { id: 2, nome: "Limiar da Noite", preco: 2800 },
        { id: 3, nome: "Armadura de Espinhos", preco: 3000 },
        { id: 4, nome: "Rabadon's Deathcap", preco: 3600 },
        { id: 5, nome: "Botas da Mobilidade", preco: 1100 },
        { id: 6, nome: "Capa da Invisibilidade", preco: 650 },
        { id: 7, nome: "Aegis da Legião", preco: 2400 },
        { id: 8, nome: "Lâmina do Rei Destruído", preco: 3200 },
        { id: 9, nome: "Murmúrio de Goredrinker", preco: 3500 },
        { id: 10, nome: "Dente de Nashor", preco: 3000 },
    ];

    return (
        <div>
            <h2>Produtos</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                            <th>EDITAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                <td>{p.preco}g</td>
                                <td> <Link href={`/produtos/produto/${p.id}`}>Editar</Link> </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>
                                Quantidade de registros:{lista.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
