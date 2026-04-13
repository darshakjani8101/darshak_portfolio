import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
  projectdata:   {
    name: string;
    description: string[];
    technologies: string[];
  }[]

};

export type ProjectDetails = {
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};

export type AboutMeDetails = {
  title: string;
  paragraphs: string[];
  quickBitsTitle?: string;
  quickBits?: string[];
};

export type CertificationDetails = {
  name: string;
  organization: string;
  description: string;
  issueDate: Date;
  expiryDate?: Date;
  url?: string;
};

export type HeroBioItem = {
  text: string[];
  link?: {
    url: string;
    label: string;
  };
};
