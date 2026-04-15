export interface DriverProfile {
  aggression: number;
  calculation: number;
  teamwork: number;
  adaptability: number;
  charisma: number;
}

export interface Driver {
  name: string;
  chinese: string;
  team: string;
  abbrev: string;
  number: string;
  flag: string;
  teamColor: string;
  teamLogo: string;
  photo: string;
  carImage: string;
  description: string;
  profile: DriverProfile;
}

export interface Option {
  text: string;
  scores: Partial<DriverProfile>;
}

export interface Question {
  text: string;
  options: Option[];
}
