import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

// The name of every hook needs to start with "use"
export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(
    ModelsContext
  );

  useEffect(() => {
    // "It makes a lot of dirt..."
    return () => unregisterModel(modelName); // "Undo a lot of dirt..." So when the hook is destroyed the function unregisterModel will be called.
  }, [modelName, unregisterModel]);

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName,
  ]);

  return { registerModel, getModel };
}
