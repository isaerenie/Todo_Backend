

function Unauthorized() {
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="error-template text-center">
                        <h1>Oops!</h1>
                        <h2>401 Unauthorized</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Unauthorized access!
                        </div>
                        <div className="error-actions mt-4">
                            <a href="/" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Take Me Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Unauthorized
