const Login = function(props){  
    return (
        <section className="vh-100" style={{backgroundColor:"#e9ecef"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{borderRadius:"1rem"}}>
                    <div className="card-body p-5 text-center">

                        <h3 className="mb-5">Log in</h3>

                        <div className="form-outline mb-4">
                            <input type="email" id="email" className="form-control form-control-lg" name="email"/>
                            <label className="form-label" htmlFor="email">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control form-control-lg" name="password"/>
                        <label className="form-label" htmlFor="password">Password</label>
                        </div>

                        <div className="form-check d-flex justify-content-start mb-4">
                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                        <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                        </div>

                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                        className="link-primary">Register</a></p>

                        <hr className="my-4"/>

                        <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor:"#dd4b39"}}
                        type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                        <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor:"#3b5998"}}
                        type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Login