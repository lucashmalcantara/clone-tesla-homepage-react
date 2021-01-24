import React, { ReactNode } from "react";

export interface CarModel {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLElement>; //We need this reference because each car model needs a section.
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>; //This is a reference to our Wrapper.
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext);
