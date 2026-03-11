import { useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

const Updatepass = () => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put('http://localhost:9000/update-password', {
                email,
                oldPassword,
                newPassword
            });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Error updating password');
        }
    };

    return (
        <div>
            <Header />
            <div className="account">
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6 className="mb-0 pb-0">
                                        <span>Update Your Password</span>
                                    </h6>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Update Password</h4>
                                                        <form onSubmit={handleUpdate}>
                                                            <div className="form-group">
                                                                <input
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    type="email"
                                                                    className="form-style"
                                                                    placeholder="Your Email"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                                <MdAlternateEmail className="input-icon" />
                                                            </div>

                                                            <div className="form-group mt-2">
                                                                <input
                                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                                    type="password"
                                                                    className="form-style"
                                                                    placeholder="Old Password"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                                <MdLockOutline className="input-icon" />
                                                            </div>

                                                            <div className="form-group mt-2">
                                                                <input
                                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                                    type="password"
                                                                    className="form-style"
                                                                    placeholder="New Password"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                                <MdLockOutline className="input-icon" />
                                                            </div>

                                                            <button type="submit" className="btn mt-4">
                                                                Update
                                                            </button>
                                                        </form>
                                                        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updatepass;
