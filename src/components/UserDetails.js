import { Image } from "react-bootstrap";

function UserDetails({ details, loading }) {
  if (loading) {
    return (
      <tbody>
        <tr>
          <td>Carregando...</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      <tr className="text-center align-middle">
        <td>
          <Image
            src={details.avatar_url}
            width="50"
            height="50"
            roundedCircle
          />
        </td>
        <td>
          <a href={details.html_url} target="_blank">
            {details.login}
          </a>
        </td>
        <td>{details.name}</td>
        <td>{details.email}</td>
        <td>{details.location}</td>
      </tr>
    </tbody>
  );
}

export default UserDetails;
