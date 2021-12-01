
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className="socialNetworks">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><BsFacebook className="iconsNetworks"/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram className="iconsNetworks"/></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter className="iconsNetworks"/></a>
            </div>
                <p className="textFooter">ⒸCopyright Todos los derechos reservados. Gabriela Lupidi 2021</p>
        </footer>
    )
}

export default Footer;