import './LoginPage.css'
import { Link } from 'react-router-dom';
function LoginPage(){
    return(
        <div className="Login">
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                
                <div className='Btn'>
                    <Link  to='/Dashboard' className='button'>Submit</Link>
                </div>
            </form>
            <div className='decor'>
                <h1>
                    Please Login
                </h1>
            </div>
        </div>
    );
}
export default LoginPage