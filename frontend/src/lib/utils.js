import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// bg-[#0B192C]
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colleges = [
  {
    name: "NALANDA COLLEGE OF ENGINEERING",
    shortName: "nce-chandi",
    college_id: "001",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis dui ut magna hendrerit, non fermentum justo pharetra. Sed venenatis quam non orci interdum, in consequat ex sodales. Nullam id turpis nec eros bibendum dictum ac a magna. Vivamus porttitor, eros eget interdum molestie, risus nisi cursus dolor, et euismod velit erat a risus. Duis nec gravida libero, vel faucibus odio. Ut malesuada sem et lectus tincidunt, sit amet dictum metus viverra. Nam vel metus eget urna tristique posuere non in arcu. Suspendisse sit amet felis at magna vehicula fermentum.Curabitur sagittis varius lectus, nec interdum sapien iaculis vel. Fusce ac ligula sem. Vestibulum egestas sodales lacus. Aenean auctor nunc sed tellus dignissim, nec suscipit lacus tempus. Vivamus venenatis volutpat libero, vel efficitur ante fringilla sit amet. Sed in erat at lorem iaculis gravida. Proin ac risus eu risus iaculis ultrices. Maecenas posuere mi vitae velit ultricies posuere. Nulla luctus est ac nibh auctor, ut tincidunt justo pretium. Quisque posuere consequat elit, eget egestas sapien finibus sed. Suspendisse potenti. Pellentesque fringilla, nisl ut ultrices sagittis, eros arcu lacinia eros, vel accumsan purus odio at metus.",
    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
        cgpa: 9.2,
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
        cgpa: 8.5,
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
        cgpa: 7.8,
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
        cgpa: 9.7,
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
        cgpa: 6.9,
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
        cgpa: 8.8,
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
        cgpa: 9.5,
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
        cgpa: 7.6,
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
        cgpa: 8.3,
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
        cgpa: 9.8,
      },
    ],
    faculties: [
      {
        id: 1,
        name: "Dr. Rajesh Gupta",
        department: "Computer Science",
        designation: "Professor",
        experience: 15,
        rating: 9.3,
        profileImage: "https://example.com/images/rajesh-gupta.jpg",
        email: "rajesh.gupta@university.edu",
        phone: "+1-234-567-8901",
        office: "Room 101, CS Building",
        specialization: "Artificial Intelligence, Machine Learning",
        courses: ["Introduction to AI", "Advanced Machine Learning"],
      },
      {
        id: 2,
        name: "Ms. Anjali Verma",
        department: "Electronics and Communication",
        designation: "Assistant Professor",
        experience: 8,
        rating: 8.7,
        profileImage: "https://example.com/images/anjali-verma.jpg",
        email: "anjali.verma@university.edu",
        phone: "+1-234-567-8902",
        office: "Room 202, EC Building",
        specialization: "Signal Processing, Wireless Communication",
        courses: ["Digital Communication", "Signal Processing Fundamentals"],
      },
      {
        id: 3,
        name: "Dr. Vikram Rao",
        department: "Mechanical Engineering",
        designation: "Professor",
        experience: 20,
        rating: 9.6,
        profileImage: "https://example.com/images/vikram-rao.jpg",
        email: "vikram.rao@university.edu",
        phone: "+1-234-567-8903",
        office: "Room 303, ME Building",
        specialization: "Thermodynamics, Fluid Mechanics",
        courses: ["Thermodynamics", "Fluid Dynamics"],
      },
      {
        id: 4,
        name: "Dr. Meena Kapoor",
        department: "Information Technology",
        designation: "Associate Professor",
        experience: 12,
        rating: 8.9,
        profileImage: "https://example.com/images/meena-kapoor.jpg",
        email: "meena.kapoor@university.edu",
        phone: "+1-234-567-8904",
        office: "Room 104, IT Building",
        specialization: "Database Systems, Data Security",
        courses: ["Database Management", "Cybersecurity Basics"],
      },
      {
        id: 5,
        name: "Mr. Arvind Mishra",
        department: "Civil Engineering",
        designation: "Assistant Professor",
        experience: 6,
        rating: 7.8,
        profileImage: "https://example.com/images/arvind-mishra.jpg",
        email: "arvind.mishra@university.edu",
        phone: "+1-234-567-8905",
        office: "Room 205, CE Building",
        specialization: "Structural Engineering, Geotechnical Engineering",
        courses: ["Structural Analysis", "Geotechnical Engineering"],
      },
      {
        id: 6,
        name: "Dr. Preeti Sharma",
        department: "Electrical Engineering",
        designation: "Professor",
        experience: 18,
        rating: 9.4,
        profileImage: "https://example.com/images/preeti-sharma.jpg",
        email: "preeti.sharma@university.edu",
        phone: "+1-234-567-8906",
        office: "Room 306, EE Building",
        specialization: "Power Systems, Renewable Energy",
        courses: ["Power Systems Analysis", "Renewable Energy Technology"],
      },
      {
        id: 7,
        name: "Dr. Ravi Shankar",
        department: "Aerospace Engineering",
        designation: "Professor",
        experience: 25,
        rating: 9.8,
        profileImage: "https://example.com/images/ravi-shankar.jpg",
        email: "ravi.shankar@university.edu",
        phone: "+1-234-567-8907",
        office: "Room 401, AE Building",
        specialization: "Aerodynamics, Propulsion Systems",
        courses: ["Aerodynamics", "Aircraft Propulsion"],
      },
      {
        id: 8,
        name: "Ms. Sonia Das",
        department: "Biotechnology",
        designation: "Assistant Professor",
        experience: 5,
        rating: 7.5,
        profileImage: "https://example.com/images/sonia-das.jpg",
        email: "sonia.das@university.edu",
        phone: "+1-234-567-8908",
        office: "Room 108, BT Building",
        specialization: "Genetic Engineering, Molecular Biology",
        courses: ["Molecular Biology", "Genetic Engineering Principles"],
      },
      {
        id: 9,
        name: "Dr. Karan Mehta",
        department: "Chemical Engineering",
        designation: "Associate Professor",
        experience: 10,
        rating: 8.5,
        profileImage: "https://example.com/images/karan-mehta.jpg",
        email: "karan.mehta@university.edu",
        phone: "+1-234-567-8909",
        office: "Room 207, ChE Building",
        specialization: "Chemical Process Design, Thermodynamics",
        courses: ["Process Design", "Chemical Thermodynamics"],
      },
      {
        id: 10,
        name: "Dr. Neha Joshi",
        department: "Data Science",
        designation: "Professor",
        experience: 14,
        rating: 9.2,
        profileImage: "https://example.com/images/neha-joshi.jpg",
        email: "neha.joshi@university.edu",
        phone: "+1-234-567-8910",
        office: "Room 110, DS Building",
        specialization: "Big Data Analytics, Machine Learning",
        courses: ["Big Data Fundamentals", "Introduction to Machine Learning"],
      },
      {
        id: 11,
        name: "Dr. Roshni Joshi",
        department: "Data Science",
        designation: "Professor",
        experience: 14,
        rating: 9.2,
        profileImage: "https://example.com/images/neha-joshi.jpg",
        email: "neha.joshi@university.edu",
        phone: "+1-234-567-8910",
        office: "Room 110, DS Building",
        specialization: "Big Data Analytics, Machine Learning",
        courses: ["Big Data Fundamentals", "Introduction to Machine Learning"],
      },
    ],
  },
  {
    name: "GAYA COLLEGE OF ENGINEERING",
    shortName: "gce-gaya",
    college_id: "002",
    description:
      "Gaya College of Engineering offers a range of technical programs in engineering. The campus is equipped with state-of-the-art infrastructure and provides students with hands-on experience.",
    students: [
      {
        id: 1,
        name: "Aman Dubey",
        branch: "Computer Science",
        year: "1st Year",
        grade: "A+",
        cgpa: 9.5,
      },
      {
        id: 2,
        name: "Kritika Sharma",
        branch: "Information Technology",
        year: "2nd Year",
        grade: "A",
        cgpa: 8.9,
      },
      {
        id: 3,
        name: "Varun Patel",
        branch: "Mechanical Engineering",
        year: "3rd Year",
        grade: "B+",
        cgpa: 7.4,
      },
      {
        id: 4,
        name: "Isha Aggarwal",
        branch: "Civil Engineering",
        year: "4th Year",
        grade: "A",
        cgpa: 8.7,
      },
      {
        id: 5,
        name: "Rajat Verma",
        branch: "Electronics and Communication",
        year: "1st Year",
        grade: "A-",
        cgpa: 7.9,
      },
      {
        id: 6,
        name: "Neha Kapoor",
        branch: "Electrical Engineering",
        year: "3rd Year",
        grade: "B",
        cgpa: 6.5,
      },
      {
        id: 7,
        name: "Aditya Kumar",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
        cgpa: 9.3,
      },
      {
        id: 8,
        name: "Riya Singh",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
        cgpa: 7.6,
      },
      {
        id: 9,
        name: "Nikhil Joshi",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
        cgpa: 8.4,
      },
      {
        id: 10,
        name: "Tanvi Chauhan",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
        cgpa: 9.7,
      },
    ],
  },
  {
    name: "DARBHANGA COLLEGE OF ENGINEERING",
    shortName: "dce-darbhanga",
    college_id: "003",
    description:
      "Darbhanga College of Engineering provides quality education in engineering disciplines. The college emphasizes on overall development through extracurricular activities and workshops.",

    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
        cgpa: 8,
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
        cgpa: 9,
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
        cgpa: 7.5,
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
        cgpa: 8.2,
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
        cgpa: 9,
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
        cgpa: 7.9,
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
        cgpa: 9,
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
        cgpa: 7,
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
        cgpa: 9.5,
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
        cgpa: 8.9,
      },
    ],
  },
  {
    name: "MOTIHARI COLLEGE OF ENGINEERING",
    shortName: "mce-motihari",
    college_id: "004",
    description:
      "Motihari College of Engineering offers a diverse range of engineering programs. It is known for its academic excellence and collaborative research initiatives with industry partners.",

    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
      },
    ],
  },
  {
    name: "LOK NAYAK JAI PRAKASH INSTITUTE OF TECHNOLOGY",
    shortName: "lnjpit-chapra",
    college_id: "005",
    description:
      "LNJPIT offers a wide range of technical programs, focusing on industry-oriented skills. The college promotes research activities and has excellent lab facilities.",

    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
      },
    ],
  },
  {
    name: "SERSHAH ENGINEERING COLLEGE",
    shortName: "sec-sasaram",
    college_id: "006",
    description:
      "Sershah Engineering College focuses on producing high-quality engineers by providing modern teaching methods, industry internships, and a strong placement record.",

    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
      },
    ],
  },
  {
    name: "RASHTRAKAVI RAMDHARI SINGH DINKAR COLLEGE OF ENGINEERING",
    shortName: "rrsdce-begusarai",
    college_id: "007",
    description:
      "The college provides world-class education in the field of engineering and technology. Students receive hands-on training and are encouraged to participate in innovative projects.",
    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
      },
    ],
  },
  {
    name: "SUPAUL COLLEGE OF ENGINEERING",
    shortName: "sce-supaul",
    college_id: "008",
    description:
      "Supaul College of Engineering offers undergraduate programs in engineering with an emphasis on research, practical training, and skill development.",
    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
      },
    ],
  },
  {
    name: "BAKHTIYARPUR COLLEGE OF ENGINEERING",
    shortName: "bce-bakhtiyarpur",
    college_id: "009",
    description:
      "Bakhtiyarpur College of Engineering is known for its strong academic programs and infrastructure. It focuses on developing students' technical skills and research capabilities.",
    students: [
      {
        id: 1,
        name: "Arjun Mehta",
        branch: "Computer Science",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 2,
        name: "Priya Sharma",
        branch: "Electronics and Communication",
        year: "3rd Year",
        grade: "B+",
      },
      {
        id: 3,
        name: "Rohan Gupta",
        branch: "Mechanical Engineering",
        year: "4th Year",
        grade: "A-",
      },
      {
        id: 4,
        name: "Sana Khan",
        branch: "Information Technology",
        year: "1st Year",
        grade: "A+",
      },
      {
        id: 5,
        name: "Neha Verma",
        branch: "Civil Engineering",
        year: "3rd Year",
        grade: "B",
      },
      {
        id: 6,
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        year: "2nd Year",
        grade: "A",
      },
      {
        id: 7,
        name: "Ishaan Choudhary",
        branch: "Aerospace Engineering",
        year: "4th Year",
        grade: "A+",
      },
      {
        id: 8,
        name: "Meera Kapoor",
        branch: "Biotechnology",
        year: "2nd Year",
        grade: "B+",
      },
      {
        id: 9,
        name: "Ankit Yadav",
        branch: "Chemical Engineering",
        year: "3rd Year",
        grade: "A",
      },
      {
        id: 10,
        name: "Tara Joshi",
        branch: "Data Science",
        year: "1st Year",
        grade: "A+",
      },
    ],
  },
  {
    name: "SITAMARHI INSTITUTE OF TECHNOLOGY",
    shortName: "sit-sitamarhi",
    college_id: "010",
    description:
      "Sitamarhi Institute of Technology offers specialized engineering education with an emphasis on technology-driven innovations and industry collaborations.",
  },
  {
    name: "PURNEA COLLEGE OF ENGINEERING",
    shortName: "pce-purnea",
    college_id: "011",
    description:
      "Purnea College of Engineering is committed to providing high-quality engineering education. It has a vibrant campus life and a strong focus on research and development.",
  },
  {
    name: "B. P. MANDAL COLLEGE OF ENGINEERING",
    shortName: "bpcm-madhepura",
    college_id: "012",
    description:
      "BP Mandal College of Engineering offers cutting-edge engineering programs. It focuses on innovation and offers numerous opportunities for student growth and development.",
  },
  {
    name: "KATIHAR ENGINEERING COLLEGE",
    shortName: "keck-katihar",
    college_id: "013",
    description:
      "Katihar Engineering College focuses on providing high-quality technical education with a strong emphasis on industry interaction and modern teaching methods.",
  },
  {
    name: "SAHARSA COLLEGE OF ENGINEERING",
    shortName: "sce-saharsa",
    college_id: "014",
    description:
      "Saharsha College of Engineering offers a variety of engineering courses. The college strives for excellence in teaching, research, and overall student development.",
  },
  {
    name: "GOVERNMENT ENGINEERING COLLEGE, JAMUI",
    shortName: "gec-jamui",
    college_id: "015",
    description:
      "Government Engineering College, Jamui, is a state-run institution providing quality engineering education. It offers modern infrastructure and a well-developed research ecosystem.",
  },
  {
    name: "GOVERNMENT ENGINEERING COLLEGE, BANKA",
    shortName: "gec-banka",
    college_id: "016",
    description:
      "Government Engineering College, Banka, provides state-of-the-art facilities and focuses on fostering industry-ready engineers with a practical learning approach.",
  },
  {
    name: "GOVERNMENT ENGINEERING COLLEGE, VAISHALI",
    shortName: "gec-vaishali",
    college_id: "017",
    description:
      "Government Engineering College, Vaishali offers undergraduate engineering courses with an emphasis on quality education, research, and innovation.",
  },
  {
    name: "GOVERNMENT ENGINEERING COLLEGE, NAWADA",
    shortName: "gec-nawada",
    college_id: "018",
    description:
      "Government Engineering College, Nawada offers programs that are designed to develop students' technical skills and knowledge with cutting-edge infrastructure.",
  },
  {
    name: "GOVERNMENT ENGINEERING COLLEGE, KISHANGANJ",
    shortName: "gec-kishanganj",
    college_id: "019",
    description:
      "Government Engineering College, Kishanganj is known for its academic excellence and innovative teaching methods. It prepares students for global engineering challenges.",
  },
  {
    name: "GOVERNMENT ENGINEERING COLLEGE, MUNGER",
    shortName: "gec-munger",
    college_id: "020",
    description:
      "Government Engineering College, Munger offers cutting-edge courses in engineering, ensuring students are well-prepared for both industry and academia.",
  },
  // Continue adding other colleges similarly...
];

export const allJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    position: 5,
    jobType: "Full-Time",
    salary: "42-1",
    location: "Bangalore",
    company: {
      name: "TechCorp Solutions",
    },
    description: "Develop and maintain the user interface.",
    experience: 2,
    applications: ["John", "Alice", "Bob"],
    createdAt: "2024-11-01T09:00:00Z",
  },
  {
    id: "2",
    title: "Backend Developer",
    position: 3,
    jobType: "Part-Time",
    salary: "1 to 5",
    location: "Mumbai",
    company: {
      name: "DataPulse Analytics",
    },
    description: "Develop server-side logic.",
    experience: 1,
    applications: ["David", "Sophia"],
    createdAt: "2024-11-02T09:00:00Z",
  },
  {
    id: "3",
    title: "FullStack Developer",
    position: 2,
    jobType: "Contract",
    salary: "0-40k",
    location: "Hyderabad",
    company: {
      name: "CloudWorks Inc.",
    },
    description: "Develop end-to-end software solutions.",
    experience: 5,
    applications: ["Emma"],
    createdAt: "2024-11-03T09:00:00Z",
  },
  {
    id: "4",
    title: "Frontend Developer",
    position: 4,
    jobType: "Full-Time",
    salary: "1 to 5",
    location: "Delhi NCR",
    company: {
      name: "Pixel Studio",
    },
    description: "Create interactive designs.",
    experience: 3,
    applications: ["Olivia", "James"],
    createdAt: "2024-11-04T09:00:00Z",
  },
  {
    id: "5",
    title: "Backend Developer",
    position: 1,
    jobType: "Full-Time",
    salary: "1 to 5",
    location: "Pune",
    company: {
      name: "CodeCrafters",
    },
    description: "Manage APIs and data services.",
    experience: 4,
    applications: ["Liam"],
    createdAt: "2024-11-05T09:00:00Z",
  },
  {
    id: "6",
    title: "FullStack Developer",
    position: 3,
    jobType: "Full-Time",
    salary: "0-40k",
    location: "Mumbai",
    company: {
      name: "InnoTech Solutions",
    },
    description: "Work on both frontend and backend.",
    experience: 2,
    applications: ["Ethan", "Mia"],
    createdAt: "2024-11-06T09:00:00Z",
  },
  {
    id: "7",
    title: "Frontend Developer",
    position: 2,
    jobType: "Full-Time",
    salary: "1 to 5",
    location: "Hyderabad",
    company: {
      name: "CreativeEdge",
    },
    description: "Design UI components.",
    experience: 6,
    applications: ["Ava"],
    createdAt: "2024-11-07T09:00:00Z",
  },
  {
    id: "8",
    title: "Backend Developer",
    position: 6,
    jobType: "Full-Time",
    salary: "1lakh to 5lakh",
    location: "Delhi NCR",
    company: {
      name: "TechNet Systems",
    },
    description: "Optimize database operations.",
    experience: 3,
    applications: ["Noah", "Sophia", "Evelyn"],
    createdAt: "2024-11-08T09:00:00Z",
  },
  {
    id: "9",
    title: "FullStack Developer",
    position: 4,
    jobType: "Full-Time",
    salary: "0-40k",
    location: "Pune",
    company: {
      name: "CodeBridge",
    },
    description: "Develop scalable web applications.",
    experience: 2,
    applications: ["Alexander"],
    createdAt: "2024-11-09T09:00:00Z",
  },
  {
    id: "10",
    title: "Frontend Developer",
    position: 5,
    jobType: "Full-Time",
    salary: "42-1lakh",
    location: "Bangalore",
    company: {
      name: "Visionary Designs",
    },
    description: "Design responsive layouts.",
    experience: 3,
    applications: ["William", "Charlotte"],
    createdAt: "2024-11-10T09:00:00Z",
  },
];

export const filterData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

export const noticeList = [
  {
    id: "64f32adf4b23456789abc001",
    title: "Annual Sports Meet Announcement",
    description:
      "Join us for the Annual Sports Meet. Various events and competitions will be held.",
    date: "2024-12-01",
    CollegeId: "C001",
    College: "BHAGALPUR COLLEGE OF ENGINEERING",
    category: "Event",
    targetAudience: "Local",
    attachments: [
      {
        fileName: "SportsMeetSchedule.pdf",
        fileUrl: "https://collegewebsite.com/notices/SportsMeetSchedule.pdf",
      },
    ],
    createdAt: "2024-11-20T12:00:00.000Z",
    updatedAt: "2024-11-20T12:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc002",
    title: "New Library Rules",
    description:
      "The library hours have been updated. Please refer to the attached document for new rules and timings.",
    date: "2024-11-18",
    CollegeId: "C002",
    College: "GAYA COLLEGE OF ENGINEERING",
    category: "Notice",
    targetAudience: "Global",
    attachments: [
      {
        fileName: "LibraryRules.pdf",
        fileUrl: "https://collegewebsite.com/notices/LibraryRules.pdf",
      },
    ],
    createdAt: "2024-11-10T08:30:00.000Z",
    updatedAt: "2024-11-10T08:30:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc003",
    title: "Semester Exam Schedule Released",
    description:
      "The examination schedule for the upcoming semester has been released. Please check the PDF for details.",
    date: "2024-11-25",
    CollegeId: "C003",
    College: "GAYA COLLEGE OF ENGINEERING",
    category: "Exam",
    targetAudience: "Local",
    attachments: [
      {
        fileName: "ExamSchedule.pdf",
        fileUrl: "https://collegewebsite.com/notices/ExamSchedule.pdf",
      },
    ],
    createdAt: "2024-11-15T09:00:00.000Z",
    updatedAt: "2024-11-15T09:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc004",
    title: "Winter Break Announcement",
    description:
      "Winter break will begin from December 20th. Classes will resume on January 5th.",
    date: "2024-12-10",
    CollegeId: "C001",
    College: "GAYA COLLEGE OF ENGINEERING",
    category: "Announcement",
    targetAudience: "Global",
    attachments: [],
    createdAt: "2024-11-22T11:00:00.000Z",
    updatedAt: "2024-11-22T11:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc005",
    title: "Internship Opportunities",
    description:
      "New internship opportunities are available for final-year students. Check the details on the college website.",
    date: "2024-11-30",
    CollegeId: "C004",
    College: "Future Leaders University",
    category: "Announcement",
    targetAudience: "Local",
    attachments: [],
    createdAt: "2024-11-18T14:30:00.000Z",
    updatedAt: "2024-11-18T14:30:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc006",
    title: "Guest Lecture on AI",
    description:
      "A guest lecture on Artificial Intelligence will be held on December 5th. All students are encouraged to attend.",
    date: "2024-12-05",
    CollegeId: "C003",
    College: "GAYA COLLEGE OF ENGINEERING",
    category: "Event",
    targetAudience: "Global",
    attachments: [
      {
        fileName: "GuestLecturePoster.jpg",
        fileUrl: "https://collegewebsite.com/notices/GuestLecturePoster.jpg",
      },
    ],
    createdAt: "2024-11-21T10:00:00.000Z",
    updatedAt: "2024-11-21T10:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc007",
    title: "New Course Introduction: Data Science",
    description:
      "A new elective course on Data Science will be introduced next semester. Interested students can register online.",
    date: "2024-11-28",
    CollegeId: "C002",
    College: "GAYA COLLEGE OF ENGINEERING",
    category: "Announcement",
    targetAudience: "Local",
    attachments: [
      {
        fileName: "CourseDetails.pdf",
        fileUrl: "https://collegewebsite.com/notices/CourseDetails.pdf",
      },
    ],
    createdAt: "2024-11-12T13:15:00.000Z",
    updatedAt: "2024-11-12T13:15:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc008",
    title: "Blood Donation Camp",
    description:
      "A blood donation camp will be organized in collaboration with Red Cross Society on December 3rd. Volunteers are welcome.",
    date: "2024-12-03",
    CollegeId: "C004",
    College: "Future Leaders University",
    category: "Event",
    targetAudience: "Global",
    attachments: [
      {
        fileName: "DonationCampDetails.pdf",
        fileUrl: "https://collegewebsite.com/notices/DonationCampDetails.pdf",
      },
    ],
    createdAt: "2024-11-19T16:45:00.000Z",
    updatedAt: "2024-11-19T16:45:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc009",
    title: "Alumni Meet 2024",
    description:
      "The Alumni Meet 2024 will take place on December 25th. Alumni are invited to register online for the event.",
    date: "2024-12-25",
    CollegeId: "C001",
    College: "Greenfield College",
    category: "Sports",
    targetAudience: "Global",
    attachments: [],
    createdAt: "2024-11-23T10:20:00.000Z",
    updatedAt: "2024-11-23T10:20:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc010",
    title: "Holiday Notice: Christmas",
    description:
      "The college will remain closed on December 25th for Christmas. Happy Holidays!",
    date: "2024-12-20",
    CollegeId: "C002",
    College: "Bright Future College",
    category: "Announcement",
    targetAudience: "Global",
    attachments: [],
    createdAt: "2024-11-22T09:50:00.000Z",
    updatedAt: "2024-11-22T09:50:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc011",
    title: "Annual Sports Meet Announcement",
    description:
      "Join us for the Annual Sports Meet. Various events and competitions will be held.",
    date: "2024-12-01",
    CollegeId: "C001",
    College: "Greenfield College",
    category: "Event",
    targetAudience: "Local",
    attachments: [
      {
        fileName: "SportsMeetSchedule.pdf",
        fileUrl: "https://collegewebsite.com/notices/SportsMeetSchedule.pdf",
      },
    ],
    createdAt: "2024-11-20T12:00:00.000Z",
    updatedAt: "2024-11-20T12:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc012",
    title: "New Library Rules",
    description:
      "The library hours have been updated. Please refer to the attached document for new rules and timings.",
    date: "2024-11-18",
    CollegeId: "C002",
    College: "Bright Future College",
    category: "Announcement",
    targetAudience: "Global",
    attachments: [
      {
        fileName: "LibraryRules.pdf",
        fileUrl: "https://collegewebsite.com/notices/LibraryRules.pdf",
      },
    ],
    createdAt: "2024-11-10T08:30:00.000Z",
    updatedAt: "2024-11-10T08:30:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc013",
    title: "Semester Exam Schedule Released",
    description:
      "The examination schedule for the upcoming semester has been released. Please check the PDF for details.",
    date: "2024-11-25",
    CollegeId: "C003",
    College: "Tech Institute",
    category: "Exam",
    targetAudience: "Local",
    attachments: [
      {
        fileName: "ExamSchedule.pdf",
        fileUrl: "https://collegewebsite.com/notices/ExamSchedule.pdf",
      },
    ],
    createdAt: "2024-11-15T09:00:00.000Z",
    updatedAt: "2024-11-15T09:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc014",
    title: "Winter Break Announcement",
    description:
      "Winter break will begin from December 20th. Classes will resume on January 5th.",
    date: "2024-12-10",
    CollegeId: "C001",
    College: "Greenfield College",
    category: "Announcement",
    targetAudience: "Global",
    attachments: [],
    createdAt: "2024-11-22T11:00:00.000Z",
    updatedAt: "2024-11-22T11:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc015",
    title: "Internship Opportunities",
    description:
      "New internship opportunities are available for final-year students. Check the details on the college website.",
    date: "2024-11-30",
    CollegeId: "C004",
    College: "Future Leaders University",
    category: "General",
    targetAudience: "Local",
    attachments: [],
    createdAt: "2024-11-18T14:30:00.000Z",
    updatedAt: "2024-11-18T14:30:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc016",
    title: "Guest Lecture on AI",
    description:
      "A guest lecture on Artificial Intelligence will be held on December 5th. All students are encouraged to attend.",
    date: "2024-12-05",
    CollegeId: "C003",
    College: "Tech Institute",
    category: "Event",
    targetAudience: "Global",
    attachments: [
      {
        fileName: "GuestLecturePoster.jpg",
        fileUrl: "https://collegewebsite.com/notices/GuestLecturePoster.jpg",
      },
    ],
    createdAt: "2024-11-21T10:00:00.000Z",
    updatedAt: "2024-11-21T10:00:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc017",
    title: "New Course Introduction: Data Science",
    description:
      "A new elective course on Data Science will be introduced next semester. Interested students can register online.",
    date: "2024-11-28",
    CollegeId: "C002",
    College: "Bright Future College",
    category: "Announcement",
    targetAudience: "Local",
    attachments: [
      {
        fileName: "CourseDetails.pdf",
        fileUrl: "https://collegewebsite.com/notices/CourseDetails.pdf",
      },
    ],
    createdAt: "2024-11-12T13:15:00.000Z",
    updatedAt: "2024-11-12T13:15:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc018",
    title: "Blood Donation Camp",
    description:
      "A blood donation camp will be organized in collaboration with Red Cross Society on December 3rd. Volunteers are welcome.",
    date: "2024-12-03",
    CollegeId: "C004",
    College: "Future Leaders University",
    category: "Event",
    targetAudience: "Global",
    attachments: [
      {
        fileName: "DonationCampDetails.pdf",
        fileUrl: "https://collegewebsite.com/notices/DonationCampDetails.pdf",
      },
    ],
    createdAt: "2024-11-19T16:45:00.000Z",
    updatedAt: "2024-11-19T16:45:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc019",
    title: "Alumni Meet 2024",
    description:
      "The Alumni Meet 2024 will take place on December 25th. Alumni are invited to register online for the event.",
    date: "2024-12-25",
    CollegeId: "C001",
    College: "Greenfield College",
    category: "Event",
    targetAudience: "Global",
    attachments: [],
    createdAt: "2024-11-23T10:20:00.000Z",
    updatedAt: "2024-11-23T10:20:00.000Z",
  },
  {
    id: "64f32adf4b23456789abc020",
    title: "Holiday Notice: Christmas",
    description:
      "The college will remain closed on December 25th for Christmas. Happy Holidays!",
    date: "2024-12-20",
    CollegeId: "C002",
    College: "Bright Future College",
    category: "Holiday",
    targetAudience: "Global",
    attachments: [],
    createdAt: "2024-11-22T09:50:00.000Z",
    updatedAt: "2024-11-22T09:50:00.000Z",
  },
];


import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    experienceLevel:{
        type:Number,
        required:true,
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});
export const Job = mongoose.model("Job", jobSchema);

const companySchema = new mongoose.Schema({
  name:{
      type:String,
      required:true,
      unique:true
  },
  description:{
      type:String, 
  },
  website:{
      type:String 
  },
  location:{
      type:String 
  },
  logo:{
      type:String // URL to company logo
  },
  userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
  }
},{timestamps:true})
export const Company = mongoose.model("Company", companySchema);

const applicationSchema = new mongoose.Schema({
  job:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Job',
      required:true
  },
  applicant:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
  },
  status:{
      type:String,
      enum:['pending', 'accepted', 'rejected'],
      default:'pending'
  }
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);

const userSchema = new mongoose.Schema({
  fullname: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  phoneNumber: {
      type: Number,
      required: true
  },
  password:{
      type:String,
      required:true,
  },
  role:{
      type:String,
      enum:['student','recruiter'],
      required:true
  },
  profile:{
      bio:{type:String},
      skills:[{type:String}],
      resume:{type:String}, // URL to resume file
      resumeOriginalName:{type:String},
   
      profilePhoto:{
          type:String,
          default:""
      }
  },
},{timestamps:true});
export const User = mongoose.model('User', userSchema);