import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'
import "../styles/Footer.css";
import { Link } from 'react-router-dom';
export default function Footer(){

    return (
        <>
            <div className='mt-5 p-4 bg-black text-white myFooterBorder'>
                <div className='Class_Responsive d-flex align-items-start justify-content-between'>
                    <div className='NoneP'>
                        <div className='myFont myTitle mx-4'>
                            JOB <span>CENTER</span>
                        </div>
                        <p className='mx-4 mt-2 '>CamUp Job Center is service in Cambodia.</p>
                    </div>
                    <div className='UsefulLinks'>
                        <h5>Useful Links</h5>
                        <ul className='list-unstyled '>
                            <li>
                                <Link className='text-decoration-none text-white'>Home</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white'>About Us</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white'>How it works</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white'>Easy to apply</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='QuickSearch'>
                        <h5>Quick Search</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link className=' text-decoration-none text-white'>Search</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white'>Popular</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white'>New Added</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white'>Most Relevant</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Join our newslatter</h5>
                        <p>We write rarely, but only the best content</p>
                        <div className="input-group mb-3 ResponeSearch">
                            <span className="input-group-text form-color py-3">@</span>
                            <input type="text" className="form-control py-3 ResponeSearch" placeholder="Email Your address here..." />
                        </div>
                        <p>We'll never share your details.</p>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>2023 All rights reserve</div>
                    <div>
                        <ul className='list-unstyled d-flex m-0'>
                            <li className='mx-2'><FontAwesomeIcon icon={faFacebook} className='text-white' /></li>
                            <li className='mx-2'><FontAwesomeIcon icon={faYoutube} className='text-white'/></li>
                            <li className='mx-2'><FontAwesomeIcon icon={faTwitter} className='text-white'/></li>
                            <li className='mx-2'><FontAwesomeIcon icon={faTiktok} className='text-white'/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}