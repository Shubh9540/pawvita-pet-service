const fs = require('fs');
const path = require('path');

const filePath = path.resolve('data/templates.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const data = JSON.parse(rawData);

const teamDetails = data.categories.PawVita.sections.TeamDetails.variants.PawVitaTeamDetails1.items;

const dummyTemplate = {
  socialLinks: [
    { platform: "Facebook", url: "#", icon: "FaFacebookF" },
    { platform: "Instagram", url: "#", icon: "FaInstagram" },
    { platform: "LinkedIn", url: "#", icon: "FaLinkedinIn" }
  ],
  contactCard: {
    title: "Connect With PawVita",
    description: "We're here to help you and your pets live a happy, healthy life.",
    buttonText: "Contact Us",
    buttonUrl: "/contact",
    icon: "FaPaw"
  },
  expertise: [
    "Pet Grooming",
    "Breed Handling",
    "Coat & Skin Care",
    "Bath & Hygiene",
    "Pet Wellness",
    "Customer Care"
  ],
  whyChooseUs: {
    title: "Why Choose PawVita?",
    description: "At PawVita, we treat every pet like family. Our expert groomers use gentle techniques and premium products to ensure the best care for your furry companions.",
    icon: "FaHeart"
  },
  professionalSkills: [
    "Advanced Grooming Techniques",
    "Coat Trimming & Styling",
    "Skin & Coat Treatment",
    "Breed Specific Grooming",
    "Pet Hygiene & Wellness",
    "Nail Trimming & Paw Care",
    "Handling & Comforting Pets",
    "Safety & Cleanliness Standards"
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Pet Groomer",
      company: "PawVita Pet Care Center",
      duration: "2020 - Present",
      description: "Leading grooming sessions, handling specialized breeds, and ensuring top-quality care and customer satisfaction."
    },
    {
      id: "exp-2",
      role: "Pet Groomer",
      company: "Happy Tails Grooming",
      duration: "2017 - 2020",
      description: "Provided grooming and styling services for dogs and cats of various breeds with a focus on comfort and hygiene."
    },
    {
      id: "exp-3",
      role: "Assistant Groomer",
      company: "Pet Care Clinic",
      duration: "2015 - 2017",
      description: "Assisted senior groomers in daily grooming tasks, pet bathing, and maintaining cleanliness of grooming areas."
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Certified Pet Groomer",
      institution: "National Pet Groomers Institute",
      icon: "FaAward"
    },
    {
      id: "edu-2",
      degree: "Pet First Aid & CPR Certified",
      institution: "Pet Care Health Academy",
      icon: "FaAward"
    }
  ]
};

data.categories.PawVita.sections.TeamDetails.variants.PawVitaTeamDetails1.items = teamDetails.map(member => {
  if (member.id === 'team-1') return member; // Already done

  const firstName = member.name.split(' ')[0];

  return {
    id: member.id,
    name: member.name,
    role: member.role,
    image: member.image,
    socialLinks: dummyTemplate.socialLinks,
    contactCard: dummyTemplate.contactCard,
    expertise: dummyTemplate.expertise,
    whyChooseUs: dummyTemplate.whyChooseUs,
    about: {
      titlePrefix: "About",
      titleName: member.name,
      description: [
        `${member.name} is a highly skilled and dedicated professional known for their commitment to excellence, attention to detail, and passion for delivering exceptional results. With years of experience in their field, ${firstName} brings a blend of technical expertise, creativity, and leadership that makes them an invaluable part of our team.`,
        `Their approach is rooted in integrity, innovation, and a deep understanding of client needs, ensuring every pet they care for leaves happy, healthy, and looking their best.`,
        `${firstName} believes in building strong relationships with both pets and their parents, providing personalized care tailored to each pet's unique needs. Their gentle touch, patience, and expertise make them a favorite among our furry clients.`
      ]
    },
    professionalSkills: dummyTemplate.professionalSkills,
    experience: dummyTemplate.experience,
    education: dummyTemplate.education
  };
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated all team members with dummy data.');
