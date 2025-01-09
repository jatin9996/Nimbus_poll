import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  options: string[]; // Las opciones para los botones
  votes?: number;
  reward?: number;
  expiryDate: string;
}

const VoteCard: React.FC<CardProps> = ({ title, description, imageUrl, options, votes, reward, expiryDate }) => {
  return (
    <Card className="h-full p-4 shadow-lg flex flex-col justify-between">
      {/* Sección 1: Imagen y título */}
      <CardHeader className="flex items-center">
        <Avatar src={imageUrl} size="lg" isBordered className="mr-4" />
        <div>
          <h4 className="text-xl font-bold">{title}</h4>
          {/* <p className="text-sm text-gray-600">{description}</p> */}
        </div>
      </CardHeader>

      {/* Sección 2: Botones dinámicos, ocupa el espacio central */}
      <CardBody className="flex-grow flex items-center justify-center">
        <div className={`grid ${options.length === 2 ? 'grid-cols-2 gap-3' : 'grid-cols-2 gap-3'}`}>
          {options.map((option, index) => (
            <Button key={index} color="primary" className="w-full min-w-[120px]">
              {option}
            </Button>
          ))}
        </div>
      </CardBody>

      {/* Sección 3: Información adicional, siempre en la parte inferior */}
      <CardFooter className="mt-4">
        <div className="flex justify-between items-center w-full text-sm text-gray-500">
          <div className="flex space-x-4">
            {/* <p>🎲 Votes: {votes.toLocaleString()}</p>
            <p>💰 Reward: ${reward.toLocaleString()}</p> */}
            <p>🗓 Expiry: {expiryDate}</p>
          </div>
          <div className="text-right">
            {/* <p>🗓 Expiry: {expiryDate}</p> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VoteCard;
