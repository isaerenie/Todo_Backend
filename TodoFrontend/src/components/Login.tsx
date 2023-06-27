function Login() {
  return (
    <div className="container col-md-4 mt-5 mb-5 p-5 border border-info rounded-3 bg-light shadow-lg p-3 mb-5 bg-body rounded mt-5">
      <form>
        <fieldset>
          <legend>
            <h1 className="text-center">Login</h1>
          </legend>
          <div className="mb-3">
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
