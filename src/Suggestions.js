export default function Suggestions(){
    let atributosSugestoes =[
        {nome:"bad.vibes.memes", razao:"Segue Você"},
        {nome:"chibirdart", razao:"Segue Você"},
        {nome:"razoesparaacreditar", razao:"Novo no Instagram"},
        {nome:"adorable_animals", razao:"Segue Você"},
        {nome:"smallcutecats", razao:"Segue Você"}
    ];

    const listaSugestões = atributosSugestoes.map((sugestao) => {
        return (
            <div className="sugestao" key={sugestao.nome}>
                <div className="usuario">
                    <img
                        src={`${sugestao.nome}.svg`}
                        alt={sugestao.nome}
                    />
                    <div className="texto">
                        <div className="nome">{sugestao.nome}</div>
                        <div className="razao">{sugestao.razao}</div>
                    </div>
                </div>
                <div className="seguir">Seguir</div>
            </div>
        );
    });

    return (<div className="sugestoes">
        <div className="titulo">
            <div className="separa">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {listaSugestões}
        </div>
    </div>)
}