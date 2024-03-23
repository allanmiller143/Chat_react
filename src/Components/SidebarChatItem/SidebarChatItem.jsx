import React, { useEffect, useState } from "react";
import "./SidebarChatItem.css";
import propTypes from "prop-types";
import { db,auth } from "../../Services/Firebase";

function SidebarChatItem({ data }) {
  const { lastMessage, users } = data;
  const [userData, setUserData] = useState(null);
  const user = users[0] === auth.currentUser?.email ? users[1] : users[0];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userSnapshot = await db
          .collection("users")
          .where("email", "==", user)
          .get();

        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          setUserData({
            name: userData.name,
            photoURL: userData.photoURL,
            email: userData.email,
          });
        } else {
          setUserData({
            name: user,
            photoURL: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
            email: user,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [users]);

  return (
    <div className="SidebarChatItem">
      {userData && (
        <>
          <img
            className="SidebarChatItemPhoto"
            src={userData.photoURL}
            alt={userData.name}
          />
          <div className="SidebarChatItemContent">
            <div className="SidebarChatItemInfo">
                <p className="SidebarChatItemName">{userData.name}</p>
                <p className="SidebarChatItemLastMessage">rehfghfghfghg</p>
            </div>
              <p className="SidebarChatItemHour">10:00</p>
          </div>
        </>
      )}
    </div>
  );
}

export default SidebarChatItem;

SidebarChatItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
