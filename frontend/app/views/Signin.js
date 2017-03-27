import React, { Component } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import { browserHistory } from 'react-router';
class Signin extends Component {

     constructor(props, context){
        super(props, context);
        this.state = {
            username: '',
            password : '',
            message : "Please log in"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange_password = this.handleChange_password.bind(this);
        this.handleGet = this.handleGet.bind(this);
    }

        handleSubmit(e){
            if (this.state.username == "" || this.state.password == "") alert("Please fill the below form");
            else {
            function getCookie(name) {
                 var cookieValue = null;
                 if (document.cookie && document.cookie != '') {
                     var cookies = document.cookie.split(';');
                     for (var i = 0; i < cookies.length; i++) {
                         var cookie = jQuery.trim(cookies[i]);
                         // Does this cookie string begin with the name we want?
                         if (cookie.substring(0, name.length + 1) == (name + '=')) {
                             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                             break;
                         }
                     }
                 }
                 return cookieValue;
             }

            e.preventDefault();
            $.ajax({
              url: '/users/',
              method: 'POST',
              dataType: 'json',
              contentType: "application/json; charset=utf-8", 
              cache: false,
              setCookie:document.cookie,
               headers: {
                    "X-CSRFToken": getCookie("csrftoken")
                },
                data : JSON.stringify({
                    "username" : this.state.username,
                    "password" : this.state.password
                }),
              success: function(data) {
                if (data) {
                        this.setState({
                          message : 'Welcome'
                        });

                    browserHistory.push('/dashboard');
                    }

                else {
                    this.setState({
                          message : "Unauthorized User,Please sign up"
                        });
                }    
              }.bind(this),
              error: function(xhr, status, err) {
                console.log(err)
                this.setState({
                  message : "something went wrong",
                });
              }.bind(this)
            });
        }
        }

        handleGet(e){
            e.preventDefault();
            $.ajax({
              url: '/userapiview',
              method: 'GET',
              cache: false,
              success: function(data) {
                console.log(data)
                this.setState({
                  message : "success"
                });
                // self.clearForm()
              }.bind(this),
              error: function(xhr, status, err) {
                this.setState({
                  message : "something went wrong",
                });
              }.bind(this)
            });
        }

        handleChange(e){
            this.setState({
                username : e.target.value
            });
            console.log(e.target.value);
        }

        handleChange_password(e){
            this.setState({
                password : e.target.value
            });
            console.log(e.target.value);
        }

    render() {
        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name">3D+</h1>
                    </div>
                    <h3>Welcome to  Our Web Site</h3>
                    <p>Login in, please</p>
                    <form className="m-t" role="form">
                    <p>{this.state.message}</p>
                    <DjangoCSRFToken />
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.username}
                                onChange={this.handleChange} placeholder="Username" required> </input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" value={this.state.password} 
                            onChange={this.handleChange_password} placeholder="Password" required></input>
                        </div>
                        <button type="button" className="btn btn-primary block full-width m-b" onClick={this.handleSubmit}>Login</button>
                        <p className="text-muted text-center"><small>Do not have an account?</small></p>
                        <a className="btn btn-sm btn-white btn-block" href="#">Create an account</a>
                    </form>
                    <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                </div>
            </div>
        )
    }

}

export default Signin
