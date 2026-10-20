const validateUsername = (username: string): string => {

  if (username.length < 4) return "Too Short.";

  if (username.includes(" ")) return "No Space Allowed.";

  if (username.toLowerCase().includes("admin")) return "Reserved Word.";

  return "Available";

};