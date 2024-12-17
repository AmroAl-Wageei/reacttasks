import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    marginTop: '20px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#ff0000',
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#333',
  };

  const errorDetailStyle = {
    fontStyle: 'italic',
    color: '#555',
  };

  return (
    <div>

      <div style={containerStyle}>
        <h1 style={headingStyle}>Oops! Something went wrong.</h1>
        <p style={textStyle}>Sorry, we couldn't find the page you're looking for or something went wrong on our end.</p>

        <p style={errorDetailStyle}>{error.statusText || error.message}</p>
      </div>

    </div>
  );
}
