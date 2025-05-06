import React from "react";

export default function Posts(){

    const [posts, setPosts] = React.useState([
        {img1:"meowed", img2:"gato-telefone", img3:"respondeai", curtidas:12031, gostado: false, salvo: false, id:0},
        {img1:"barked", img2:"dog", img3:"adorable_animals", curtidas:43213, gostado: false, salvo: false, id:1},
        {img1:"dog", img2:"adorable_animals", img3:"adorable_animals", curtidas:123124, gostado: false, salvo: false, id:2},
        {img1:"adorable_animals", img2:"meowed", img3:"meowed", curtidas:12312432, gostado: false, salvo: false, id:3},
        {img1:"barked", img2:"barked", img3:"adorable_animals", curtidas:99323, gostado: false, salvo: false, id:4}

    ]);

    function handleCurtir(id, isToggle = false) {
        setPosts(posts.map(post => {
            if (post.id === id) {
                if (!isToggle && post.gostado) return post;

                const novoEstado = isToggle ? !post.gostado : true;
                return {
                    ...post,
                    curtidas: novoEstado ? post.curtidas + 1 : post.curtidas - 1,
                    gostado: novoEstado
                };
            }
            return post;
        }));
    }

    function toggleSalvo(id) {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, salvo: !post.salvo } : post
        ));
    }

    const printPosts = posts.map((post)=> {

        return(
            <div className="post" key={post.id}>
            <div className="topo">
                <div className="usuario">
                    <img src={`${post.img1}.svg`}
                         alt={post.img1}/>
                    meowed
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

                <div className="conteudo" onClick={() => handleCurtir(post.id)}>
                    <img src={`${post.img2}.svg`} alt={post.img2}/>
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                        <ion-icon
                                name={post.gostado ? "heart" : "heart-outline"}
                                style={{color: post.gostado ? "red" : "inherit"}}
                                onClick={() => handleCurtir(post.id, true)}
                            />
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                    <div>
                        <ion-icon
                            name={post.salvo ? "bookmark" : "bookmark-outline"}
                            onClick={() => toggleSalvo(post.id)}
                        />
                    </div>
                </div>

                <div className="curtidas">
                    <img
                        src={`${post.img3}.svg`}
                        alt={post.img3}/>
                    <div className="texto">
                        Curtido por <strong>{post.img3}</strong> e <strong>outras {post.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>)

    })
    return (
        <div className="posts">
            {printPosts}

        </div>
    )
}