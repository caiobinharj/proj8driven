import Stories from './Stories'
import Posts from './Posts'
import Sidebar from './Sidebar'

export default function Body(){
    return(
        <>
            <p>body</p>
            <div className="esquerda">
                <Stories/>
                <Posts/>
            </div>
            <Sidebar/>

        </>
    )
}