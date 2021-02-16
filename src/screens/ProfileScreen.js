import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Nav from "../Nav";
import PlanScreen from "./PlanScreen";

import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          const {
            role,
            current_period_end,
            current_period_start,
          } = subscription.data();
          setSubscription({
            role,
            current_period_end,
            current_period_start,
          });
        });
      });
  }, [user.uid]);
  console.log(subscription);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <p>
                Plans (Current Plan:{" "}
                {subscription ? subscription?.role : "You have no active plans"}
                )
              </p>

              <PlanScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
