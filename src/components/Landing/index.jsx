import { Link } from "react-router-dom";
import { chatRooms } from "../../data/chatRooms";
import "./styles.css";

function Landing() {
  return (
    <>
      <h3>
        Surprise! I've gathered all your friends and family here to leave
        messages of love and appreciation for you.
      </h3>
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
