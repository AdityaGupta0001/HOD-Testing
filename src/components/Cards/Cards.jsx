// src/components/Cards/Cards.jsx
import React from 'react';
import {
  Card,
  CardContent,
  CardHoverLayer,
  CardDescription,
} from '../ui/card.jsx';

import Hijacked from '../../assets/Hijacked.webm';
import Shipment from '../../assets/Shipment.webm';
import FiringRange from '../../assets/FiringRange.webm';
import Rust from '../../assets/Rust.webm';

const missions = [
  {
    name: 'HEALTHCARE',
    image: Hijacked,
    description:
      'Gear up and deploy cutting-edge solutions that can be game-changers in the medical field. Whether you\'re crafting AI-driven diagnostics or building advanced systems to improve patient care, this mission is about creating tech that saves lives.',
  },
  {
    name: 'NLP',
    image: Rust,
    description:
      'Engage in Natural Language Processing, where words are your weapon. Just like calling out targets in COD, your models will understand, interpret, and respond with precision. Deploy algorithms that crack the language code and conquer communication.',
  },
  {
    name: 'OPEN CV',
    image: Shipment,
    description:
      'Enter the battlefield of Computer Vision, where your AI sees the world like a UAV in COD. Train models to detect, track, and analyze with pinpoint accuracy. Your mission: ensure no object goes unseen, no detail missed.',
  },
  {
    name: 'EDTECH',
    image: FiringRange,
    description:
      'Gear up for the EdTech track, where you\'ll revolutionize learning like a tactical strike in COD. Build tools that empower students and educators, ensuring knowledge is deployed swiftly and effectively. Education is your mission; innovation is your weapon.',
  },
];

const Cards = () => {
  return (
    <div className="lg:mt-16 px-12 py-6">
      <div className="flex justify-center items-center mb-8">
        <div
          className="text-6xl mt-2 text-white tracking-wider"
          style={{ fontFamily: 'Black Ops One, sans-serif' }}
        >
          CHOOSE YOUR MISSION
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {missions.map((mission, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-2 border-amber-500 text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 relative"
            onMouseEnter={(e) => {
              const hoverLayer =
                e.currentTarget.querySelector('.card-hover-layer');
              hoverLayer.classList.add('opacity-100');
              hoverLayer.style.height = '80%';
            }}
            onMouseLeave={(e) => {
              const hoverLayer =
                e.currentTarget.querySelector('.card-hover-layer');
              hoverLayer.classList.remove('opacity-100');
              hoverLayer.style.height = '0';
            }}
          >
            <CardContent className="p-0">
              <div className="overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  src={mission.image}
                  alt={mission.name}
                  style={{ width: '100%', height: '420px' }}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-amber-500">
                  {mission.name}
                </h3>
              </div>
            </CardContent>
            <CardHoverLayer className="card-hover-layer">
              <CardDescription>{mission.description}</CardDescription>
            </CardHoverLayer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;