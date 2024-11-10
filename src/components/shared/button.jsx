import PropTypes from "prop-types";

function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border-white-smoke border px-4 py-2 text-white-smoke hover:bg-purple-900"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
