
import { useRef, useState } from "react";

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800 flex items-center justify-center p-5">
      <div className="w-full max-w-md rounded-3xl border-2 border-purple-300 bg-white p-8 shadow-2xl">

        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-700 text-3xl font-bold text-white shadow-lg">
            L
          </div>

          <h1 className="text-3xl font-extrabold text-purple-950">
            Login Form
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Welcome back! Please login to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-bold text-gray-800">
              Username
            </label>

            <input
              type="text"
              ref={usernameRef}
              placeholder="Enter your username"
              required
              className="w-full rounded-xl border-2 border-purple-200 bg-purple-50 px-4 py-3 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold text-gray-800">
              Password
            </label>

            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border-2 border-purple-200 bg-purple-50 px-4 py-3 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl border-2 border-purple-950 bg-purple-700 py-3 font-extrabold text-white shadow-lg transition hover:bg-pink-700 active:scale-95"
          >
            Login →
          </button>
        </form>

        {submitted && (
          <div className="mt-6 rounded-xl border-2 border-green-500 bg-green-50 p-5">
            <h2 className="mb-3 text-xl font-extrabold text-green-800">
              Submitted Information
            </h2>

            <p className="mb-2 break-words text-gray-800">
              <span className="font-bold">Username:</span> {username}
            </p>

            <p className="break-words text-gray-800">
              <span className="font-bold">Password:</span> {password}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
