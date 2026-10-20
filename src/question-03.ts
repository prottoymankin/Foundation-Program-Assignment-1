const validateUsername = (username: string): string => {

  if (username.length < 4) return "Too Short.";

  if (username.includes(" ")) return "No Space Allowed.";

  if (username.toLowerCase().includes("admin")) return "Reserved Word.";

  return "Available";

};

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));