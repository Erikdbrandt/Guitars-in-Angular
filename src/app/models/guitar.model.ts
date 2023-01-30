export interface Guitar {
  id: number;
  model: string;
  manufacturer: string;
  bodyType: string;
  materials: GuitarMaterials;
  strings: number;
  image: string;
}

export interface GuitarMaterials {
  neck: string;
  fretboard: string;
  body: string;
}
