import React from "react";
import { Row, Grid } from "../core/core";
export class Login extends React.Component {
    render(){
        return (
            <Grid className="grid-xxs-12 grid-sm-6 grid-sm-push-3">
                <div className='login-block'>
                    <div className='header mb-xxs-40'>
                        <h2>
                            <img src='dist/images/sent-mail.png' alt='sentbox' /><span>Send</span>box
                        </h2>
                    </div>
                    <div className='form-group mb-xxs-30'>
                        <label>Email</label>
                        <input type='email' name='email' ref='email' className='form-control' id='email'/>
                    </div>
                    <div className='form-group mb-xxs-30'>
                        <label>Password</label>
                        <input type='password' name='password' ref='password' className='form-control' id='password'/>
                    </div>
                    <div className='form-group'>
                        <div className='btn-group'>
                            <Row>
                                <Grid className="grid-xxs-6">
                                    <span className='btn btn-md'>Login</span>
                                </Grid>
                                <Grid className="grid-xxs-6">
                                    <span className='btn btn-md'>Sign Up</span>
                                </Grid>
                            </Row>
                        </div>
                    </div>
                </div>
            </Grid>
        )
    }
}