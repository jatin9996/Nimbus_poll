// src/app/profile/page.tsx
import React from "react";
import ProfileCard from "@/components/ProfileCard/ProfileCard"; // Asegúrate de ajustar la ruta según la estructura del proyecto

const ProfilePage = () => {
  const userData = {
    username: "BRLSoF…………1w1f61rM",
    nickname: "XXXXXX",
    portfolio: "USDC XXXX",
  };

  return (
    <div className="container mx-auto flex justify-center py-10">
      <ProfileCard
        username={userData.username}
        nickname={userData.nickname}
        portfolio={userData.portfolio}
      />
    </div>
  );
};

export default ProfilePage;
