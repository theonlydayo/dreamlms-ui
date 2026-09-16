import { useState } from "react";

type PasswordInputProps = {
  id?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function PasswordInput({
  id,
  name,
  placeholder,
  value,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-input">
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <button
        type="button"
        className="password-toggle"
        onClick={() => setShowPassword((previous) => !previous)}
      >
        👁
      </button>
    </div>
  );
}

export default PasswordInput;