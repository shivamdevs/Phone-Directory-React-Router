import {Link} from 'react-router-dom';

function Layout(props) {
    return (
        <div className="section">
            <header className="header">
             <h2>
               <span>{props.headerText}</span>
               <a href="https://myoasis.tech" className="linker" target="_blank" rel="noopener noreferrer">© Oasis.tech</a>
             </h2>
             <Link className={`button ${props.headerType}`} to={props.headerLink}>{props.headerButton}</Link>
           </header>
           {props.children}
        </div>
    );
}
export default Layout;