export function getTerm() {
  const date = new Date();
  let month = date.getMonth() + 1; // returns 0 to 11, add 1 to get 1 to 12
  let year = date.getFullYear();

  // fall term: sept to dec
  // winter term: jan to apr
  // spring term: may to aug

  if (year === 2023) {
    return "1A";
  } else if (year === 2024 && 5 <= month <= 8) {
    return "1B";
  } else if (year === 2025 && 1 <= month <= 4) {
    return "2A";
  } else if (year === 2025 && 9 <= month <= 12) {
    return "2B";
  } else if (year === 2026 && 5 <= month <= 8) {
    return "3A";
  } else if (year === 2027 && 1 <= month <= 4) {
    return "3B";
  } else if (year === 2027 && 9 <= month <= 12) {
    return "4A";
  } else if (year === 2028 && 1 <= month <= 4) {
    return "4B";
  } else {
    return "graduated";
  }
}
