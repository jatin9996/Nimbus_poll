// src/components/ProfileCard.tsx
import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  username: string;
  nickname: string;
  portfolio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ username, nickname, portfolio }) => {
  return (
    <div className="min-w-[350px] max-w-lg w-full p-6 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row">
      {/* Sección de imagen, ocupa 1/3 del ancho y 100% del alto en pantallas más grandes */}
      <div className="sm:w-1/3 flex items-center justify-center mb-4 sm:mb-0">
        <Image
          src="https://nextui.org/avatars/avatar-1.png" // Ruta correcta de la imagen
          alt="Profile"
          width={100} // Ajusta este valor según el tamaño deseado
          height={100} // Ajusta este valor según el tamaño deseado
          className="rounded-lg"
        />
      </div>

      {/* Sección de información, ocupa 2/3 del ancho en pantallas grandes */}
      <div className="sm:w-2/3 flex flex-col justify-center ml-0 sm:ml-4">
        <p className="text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">{username}</p>
        <p className="text-gray-500">Nickname: {nickname}</p>
        <p className="text-gray-500">Portfolio: {portfolio}</p>

        {/* Sección de botones */}
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-1/2 mr-2">
            Deposit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/2">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
