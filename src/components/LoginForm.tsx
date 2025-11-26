import React from "react";

const LoginForm = () => {
  return (
    <div className="inline-block bg-amber-400">
      <form>
        <label htmlFor="fname">Login:</label>
        <br />
        <input type="text" id="fname" name="fname" placeholder="username" />
        <br />
        <label htmlFor="lname"></label>
        <br />
        <input type="text" id="lname" name="lname" placeholder="password" />
      </form>
    </div>
  );
};

export default LoginForm;
