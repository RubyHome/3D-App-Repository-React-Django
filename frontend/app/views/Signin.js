import React, { Component } from 'react';

class Signin extends Component {

    render() {
        return (

            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name">3D+</h1>
                    </div>
                    <h3>Welcome to  Our Web Site</h3>
                    <p>Login in, please</p>
                    <form className="m-t" role="form" action="/main">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Username" required> </input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required></input>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                        <a href="#"><small>Forgot password?</small></a>
                        <p className="text-muted text-center"><small>Do not have an account?</small></p>
                        <a className="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
                    </form>
                    <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                </div>
            </div>
        )
    }

}

export default Signin