import React, { useState } from "react"

const CaseFour = () => {
  const [username, setUsername] = useState("");
  const isValid = username.length >= 8;
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  return (
    <div>
      <form className="flex flex-col gap-3">
        <label className="text-2xl font-bold">Username:</label>
        <input
          className="text-lg py-1.5 px-3 rounded"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={changeHandler}
        />
        <div>
          {username && (
            <p className={`text-sm ${isValid ? 'text-green-700' : 'text-red-400'}`}>
              {isValid
                ? 'Username looks good!'
                : 'The username must be contain at least 6 characters long!'}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default CaseFour