import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-white-smoke border px-4 py-2 text-white-smoke"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
