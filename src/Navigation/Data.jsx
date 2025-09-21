
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", 
    // children:[
    //     {label: "Barista Training", href: "/courses/barista-training" },
    //     {label: "Sushi Training", href: "/courses/sushi-training" },
    //     {label: "Bakery Training", href: "/courses/bakery-training" },
    //      {label: "Bartending Training", href: "/courses/bartending-training" },
    // ]
   },
{ label: "Academics", 
    children:[
        {label: "MSC (Construction Mangement) ", href: "/courses/barista-training" },
        {label: "B.E. Computer", href: "/courses/sushi-training" },
        {label: "B.E. Civil Engineering", href: "/courses/bakery-training" },
         {label: "MSC Structural Engineering(Proposed)", href: "/courses/bartending-training" },
    ]
 },
   {label: "Students",href: "/student",},
   {label: "Contact",href: "/contact",},
];