import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/admin/user");
  };

  const handlePostsClick = () => {
    navigate("/admin/posts");
  };

  return (
    <div id="sidebar">
      <button id="sidebar_button" onClick={handleUserClick}>
        Users
      </button>
      <button id="sidebar_button" onClick={handlePostsClick}>
        Posts
      </button>
    </div>
  );
}

export default Sidebar;