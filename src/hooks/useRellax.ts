import { useEffect } from "react";

export function useRellax() {
  useEffect(() => {
    let rellaxInstance: { destroy?: () => void } | null = null;

    const initializeRellax = async () => {
      try {
        // Limpiar cualquier transformación previa en elementos rellax
        const existingRellaxElements = document.querySelectorAll(".rellax");
        existingRellaxElements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.transform = "";
        });

        // Dynamically import Rellax for client-side only
        const { default: RellaxClass } = await import("rellax");

        // Wait a bit for DOM to be ready
        setTimeout(() => {
          // Initialize Rellax with all elements that have the 'rellax' class
          rellaxInstance = new RellaxClass(".rellax", {
            speed: -5,
            center: false,
            round: true,
            vertical: true,
            horizontal: false,
          });
        }, 200);
      } catch (error) {
        console.error("Error initializing Rellax:", error);
      }
    };

    // Only run on client side
    if (typeof window !== "undefined") {
      initializeRellax();
    }

    // Cleanup function
    return () => {
      if (rellaxInstance && typeof rellaxInstance.destroy === "function") {
        rellaxInstance.destroy();
      }
      // Limpiar transformaciones al desmontar
      const rellaxElements = document.querySelectorAll(".rellax");
      rellaxElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = "";
      });
    };
  }, []);
}
