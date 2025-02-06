import { Link } from 'react-router-dom'

function HallPage() {

    const handleButtonClick = async () => {
        console.log('handle')
      };

    const users = [
        {
        id: 1,
        email: ""
}]
  
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container">
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                <Link
                  to={`/chat-room/${user.id}`}
                >
                  {user.email}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center mt-3">
            <a href="/" onClick={handleButtonClick}>
              Salir
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HallPage;
