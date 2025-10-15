import { useEffect } from "react";

export function useRellax() {
  useEffect(() => {
    const initializeRellax = async () => {
      try {
        // Dynamically import Rellax for client-side only
        const { default: RellaxClass } = await import("rellax");

        // Initialize Rellax with all elements that have the 'rellax' class
        new RellaxClass(".rellax");
      } catch (error) {
        console.error("Error initializing Rellax:", error);
      }
    };

    // Only run on client side
    if (typeof window !== "undefined") {
      initializeRellax();
    }

    // Cleanup is handled automatically by Rellax
    return () => {
      // Rellax doesn't have a built-in destroy method,
      // but it cleans up event listeners automatically
    };
  }, []);
}
