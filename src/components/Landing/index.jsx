import { Link } from "react-router-dom";
import { chatRooms } from "../../data/chatRooms";
import "./styles.css";

function Landing() {
  return (
    <>
      <h2>Come in!</h2>
      <ul className="chat-room-list">
        {chatRooms.map((room) => (
          <li key={room.id} className="px-3">
            <Link to={`/room/${room.id}`}>{room.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Landing };
