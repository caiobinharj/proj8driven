export default function Stories(){
    let listaNomes = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

    const listaStories = listaNomes.map(nome => {
        let imagem = `${nome}.svg`;
        return(<div className="story" key={nome}>
            <div className="imagem">
                <img src={imagem} alt={nome}/>
            </div>
            <div className="usuario">
                {nome}
            </div>
        </div>)

    })
    return (
        <div className="stories">
            {listaStories}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}