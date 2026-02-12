// src/lib/images.ts
import heroAircraft from "@/assets/images/heroAircraft.png";
import facilityInterior from "@/assets/images/facilityInterior.png";
import facilityExterior from "@/assets/images/facilityExterior.png";
import engineerOne from "@/assets/images/engineerOne.png";
import engineeringTeam from "@/assets/images/engineeringTeam.png";
import avionicsTechnician from "@/assets/images/avionicsTechnician.png";
import aircraftHanger from "@/assets/images/aircraftHanger.png";
import directorPhotoOne from "@/assets/images/directorPhoto1.png";
import directorPhotoTwo from "@/assets/images/directorPhoto2.png";
import aircraftMaintenance from "@/assets/images/aircraftMaintenance.png";
import maintenanceBay from "@/assets/images/maintenanceBay.png";
import avionicsSystems from "@/assets/images/avionicsSystems.png";
import aircraftInspection from "@/assets/images/aircraftInspection.png";
import engineOverhaul from "@/assets/images/engineOverhaul.png";
import engineeringSolutions from "@/assets/images/engineeringSolutions.png";

export const IMAGES = {
  // Hero Section
  HERO_AIRCRAFT: heroAircraft.src,

  // Aircraft Gallery
  AIRCRAFT_HANGAR_1: aircraftHanger.src,
  AIRCRAFT_HANGAR_2: maintenanceBay.src,
  AIRCRAFT_MAINTENANCE: aircraftMaintenance.src,
  AIRCRAFT_OVERHAUL: engineOverhaul.src,

  // Engineers at Work
  ENGINEER_1: engineerOne.src,
  ENGINEER_2: avionicsTechnician.src,
  ENGINEER_TEAM: engineeringTeam.src,

  // Directors (Replace with actual director photos)
  DIRECTOR_1: directorPhotoOne.src,
  DIRECTOR_2: directorPhotoTwo.src,

  // About / Facility
  FACILITY_EXTERIOR: facilityExterior.src,
  FACILITY_INTERIOR: facilityInterior.src,

  // Services
  SERVICE_AVIONICS: avionicsSystems.src,
  SERVICE_INSPECTION: aircraftInspection.src,
  SERVICE_ENGINEERING: engineeringSolutions.src,
} as const;

export type ImageKey = keyof typeof IMAGES;
