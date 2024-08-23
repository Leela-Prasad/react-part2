import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ContactPage;
