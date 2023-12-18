import { Link } from 'react-router-dom'
import './Breadcrumb.scss'

const Breadcrumb = ({
    title,
    class_name = ''
}) =>{

    return(
        <div className={`breadcrumb ${class_name}`} >
            <div className="container">
                <Link to="/">Home</Link> {">"} {title}
            </div> 
        </div>
    )
}

export default Breadcrumb;