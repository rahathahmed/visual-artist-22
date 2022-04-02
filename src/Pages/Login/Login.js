import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div>
            <h2 className='text-center'> Please Login </h2>
            <form className='login'>
                <div class="form-group mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group mb-4">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;