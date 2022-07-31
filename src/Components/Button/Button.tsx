interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        style={{
          width: "200px",
          padding: "16px",
          background: "red",
          color: "white",
          borderRadius:"5px",
          cursor:"pointer",
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
