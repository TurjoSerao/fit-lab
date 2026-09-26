import fallbackExercises from "@/data/exercises";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getExerciseData = async () => {
  try {
    const res = await fetch(API_URL, {
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      console.warn(`Exercise API returned ${res.status}. Using local data.`);

      return fallbackExercises;
    }

    const contentType = res.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      console.warn("Exercise API did not return JSON. Using local data.");

      return fallbackExercises;
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      return fallbackExercises;
    }

    return data;
  } catch (error) {
    console.error("Exercise API error. Using local data:", error);

    return fallbackExercises;
  }
};
