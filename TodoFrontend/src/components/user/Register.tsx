import { useForm } from "react-hook-form";
import { RegisterDto } from "../../models/dto/RegisterDto.ts";
import UserApiService from "../../services/UserApiService.ts";

function Register() {
    const userApiService = new UserApiService();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<RegisterDto>();

    const password = watch("password");

    const onSubmit = handleSubmit((data) => {
        userApiService.register(data).then((r) => {
            console.log(r);
        });
    });

    return (
        <>
            {/*Register*/}
            <div className="row register mt-5">
                <h3 className="pb-0">Register</h3>
                <div className="border border-info p-4 mb-4 rounded-1">
                    <form onSubmit={onSubmit}>
                        <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-person-fill"></i>
              </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Firstname"
                                aria-label="Firstname"
                                aria-describedby="basic-addon1"
                                {...register("firstName", { required: true })}
                            />
                        </div>
                        {errors.firstName && (
                            <div className="error-message">{errors.firstName.message}</div>
                        )}
                        <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-person-fill"></i>
              </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Lastname"
                                aria-label="Lastname"
                                aria-describedby="basic-addon1"
                                {...register("lastName", { required: true })}
                            />
                        </div>
                        {errors.lastName && (
                            <div className="error-message">{errors.lastName.message}</div>
                        )}
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
                                {...register("email", { required: true })}
                            />
                        </div>
                        {errors.email && (
                            <div className="error-message">{errors.email.message}</div>
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
                        <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-key-fill"></i>
              </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                aria-label="Confirm Password"
                                aria-describedby="basic-addon1"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                })}
                            />
                        </div>
                        {errors.confirmPassword && (
                            <div className="error-message">
                                {errors.confirmPassword.message}
                            </div>
                        )}
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;