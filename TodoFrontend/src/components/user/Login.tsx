import { useForm } from "react-hook-form";
import { LoginDto } from "../../models/dto/LoginDto.ts";
import UserApiService from "../../services/UserApiService.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { control } from "../../utils/control.tsx";
import { encrypt } from "../../utils/encdecrypt.tsx";

function Login() {
    const userApiService = new UserApiService();
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginDto>();

    const onSubmit = handleSubmit((data) => {
        userApiService.login(data).then((res) => {
            if (res.status === 200) {
                toast("Login successful");
                const dt = res.data;
                const stData = JSON.stringify(dt);
                sessionStorage.setItem("user", encrypt(stData));

                const user = control()!.result.authorities[0].authority;
                if (user === "ROLE_User") {
                    window.location.href = "/all";
                } else {
                    nav("/");
                }
            } else {
                toast("Login failed");
            }
        });
    });

    return (
        <>
            {/* Login */}
            <div className="row login mt-5">
                <div className="col-md-4 offset-md-4 text-center">
                    <div className="border border-info p-4 mb-4 rounded-1 shadow">
                        <h3 className="mb-3">Login</h3>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    {...register("username", { required: true })}
                                />
                            </div>
                            {errors.username && (
                                <div className="error-message">{errors.username.message}</div>
                            )}
                            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-key-fill"></i>
                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    {...register("password", { required: true })}
                                />
                            </div>
                            {errors.password && (
                                <div className="error-message">{errors.password.message}</div>
                            )}
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="mt-3">
                            <p>Don't have an account? <a href="/register">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
