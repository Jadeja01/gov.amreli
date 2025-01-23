const schemes = {
    agriculture: "Krishi Mahotsav: Assistance for crop insurance and fertilizers.",
    education: "Vidhya Deep Yojana: Scholarships for students from rural areas.",
    health: "Ayushman Bharat: Free medical treatment up to ₹5 lakh.",
    women: "Sakhi Mandal: Support for women's self-help groups.",
  };
  
  const getSchemeDetails = (category) => {
    return schemes[category] || "Sorry, I couldn't find any scheme for that category.";
  };
  
  export default getSchemeDetails;
  