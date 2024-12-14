import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined, LoginOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isInstructor, setIsInstructor] = useState();
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
        isInstructor,
      });
      //console.log("Register Response", data);
      toast("Registration Successful. Please Login");
      setName("");
      setEmail("");
      setPassword("");
      setIsInstructor("");
      setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="p-5 jumbotron text-center bg-primary">Register</h1>

      <div className="container col-md-4 offset-md-4 pb-5 p-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
          <input
            type="text"
            className="form-control mb-4 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            className="form-control mb-3 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <label className="d-flex justify-content-center">
            <input
              type="radio"
              className="mx-2"
              value="instructor"
              checked={isInstructor === "instructor"}
              onChange={() => setIsInstructor("instructor")}
              required
            />
            Register as Instructor
          </label>
          <br />
          <button
            type="submit"
            className="form-control mb-2 p-2 btn btn-block"
            disabled={!name || !email || !password || loading}
            style={{ backgroundColor: "#6a00ff", color: "white" }}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>

        <p className="text-center">
          Already registered ?{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
