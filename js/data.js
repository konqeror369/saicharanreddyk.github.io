const PORTFOLIO = {
  name: "Sai Charan Reddy K",
  tagline: "C/C++ · Cloud · Enterprise Integrations",
  phone: "+91 944 930 1875",
  email: "saicharanreddyk@outlook.com",
  linkedin: "https://linkedin.com/in/saicharanreddyk",
  github: "",

  about: {
    bio: "Software engineer with 5+ years of experience building enterprise applications in C++. I've worked across two distinct layers —\n" +
    "Building connected experiences for compliance (GST, e-Way Bill) and operations (Banks, Payment Gateways, WhatsApp) for millions of TallyPrime customers.\n" +
    "Enabling access to TallyPrime from anywhere, anytime for tens of thousands of customers!",
    education: [
      {
        degree: "Bachelor of Engineering (Honours) in Computer Science",
        institution: "Birla Institute of Technology & Science – Pilani, KK Birla Goa Campus",
        board: "BITS Pilani",
        years: "2015 – 2019"
      },
      {
        degree: "Classes XI – XII",
        institution: "Sri Chaitanya Junior Kalashala",
        board: "TSBIE",
        years: "2013 – 2015"
      },
      {
        degree: "Class X",
        institution: "Dream World School",
        board: "CBSE",
        years: "2013"
      }
    ]
  },

  experience: [
    {
      title: "Senior Software Development Engineer",
      company: "Tally Solutions",
      period: "April 2025 – Present",
      bullets: [
        "Designed and delivered a <span class=\"callout\">secure AWS-to-OCI data migration</span> experience for TallyPrime Cloud Access (TPCA), where customer data remained encrypted at rest and in transit with Tally holding no decryption capability, <span class=\"callout\">seamlessly migrating ~15,000 customers' data</span>.",
        "Implemented a <span class=\"callout\">cost-effective backup solution</span> for customer data in OCI (<span class=\"callout\">used by ~20,000 customers</span>), with compression and encryption, persisting data on object storage — as a substitute for volume snapshots.",
        "Engineered a <span class=\"callout\">DLL protection mechanism for Tally DLLs</span>, using certificate validation and runtime flow verification to prevent attachment to unauthorized executables and restrict usage to the sanctioned flows."
      ]
    },
    {
      title: "Software Development Engineer – II",
      company: "Tally Solutions",
      period: "April 2022 – March 2025",
      bullets: [
        "Authored <span class=\"callout\">asynchronous GST Portal integrations</span> enabling businesses to upload, download and file Returns from within TallyPrime - <span class=\"callout\">used by more than a million customers</span> for simplified compliance.",
        "Built <span class=\"callout\">connected service integrations</span> with WhatsApp, Payment Gateways (Razorpay, PayU, Paytm) and Banks as part of Tally Software Services (TSS) offering, subscribed by <span class=\"callout\">~1.3 million customers monthly</span>."
      ]
    },
    {
      title: "Software Development Engineer – I",
      company: "Tally Solutions",
      period: "September 2020 – March 2022",
      bullets: [
        "Contributed to <span class=\"callout\">e-Way Bill integration</span> with the Indian Government's servers, serving <span class=\"callout\">~60K customers daily</span>."
      ]
    },
    {
      title: "Research Intern",
      company: "Infinity Labs, UST Global",
      period: "May 2017 – July 2017",
      bullets: [
        "Acquinted on basics of penetration testing; built a <span class=\"callout\">Visual Basic-based key-logger</span> to capture keystrokes and mouse clicks, including event-driven screen capture and automated mailing."
      ]
    }
  ],

  skills: {
    "Languages":      ["C/C++", "Python"],
    "Tools & DevOps": ["Visual Studio", "Git", "Docker", "Kubernetes"],
    "Cloud":          ["Amazon Web Services (AWS)", "Oracle Cloud Infrastructure (OCI)"],
    "Operating Systems":   ["Linux", "Virtualization", "File Systems", "Scheduling Algorithms"],
    "Networking":     ["OSI Model", "DNS", "SSL/TLS", "HTTP", "REST APIs"],
    "Databases":      ["MySQL", "AWS DynamoDB", "OCI Tables"]
  },

  certifications: [
    { name: "AWS Certified Developer – Associate",            issuer: "Amazon Web Services",         slug: "aws-developer",           url: "https://www.credly.com/badges/b251ebf1-986a-4c1c-8fad-896e8ebaea87/public_url" },
    { name: "AWS Certified Solutions Architect – Associate",  issuer: "Amazon Web Services",         slug: "aws-solutions-architect", url: "https://www.credly.com/badges/357bc2f6-e9b9-4aef-a08a-52fd407122c9/public_url" },
    { name: "AWS Certified SysOps Administrator – Associate", issuer: "Amazon Web Services",         slug: "aws-cloudops",            url: "https://www.credly.com/badges/726c1eb9-9c4e-47a8-b40f-aa8586b46ef0/public_url" },
    { name: "OCI Foundations Associate",                      issuer: "Oracle Cloud Infrastructure", slug: "oci-foundations",         url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1597EA63FB1EF6AE2A97898607D61FD35B94AB6425D7408C18882EF8391BE8E1" }
  ],

  awards: [
    {
      name: "TallyPrime Cloud Access",
      context: "Secure AWS-to-OCI data migration for ~15,000 customers with zero-knowledge encryption",
      image: "awards/images/tally-prime-cloud-access.jpg"
    },
    {
      name: "Connected GST",
      context: "Async GST portal integrations enabling millions of customers to file returns in-product",
      image: "awards/images/connected-gst.jpg"
    },
    {
      name: "WhatsApp Integration",
      context: "WhatsApp Business messaging service for ~1.3 million TSS subscribers monthly",
      image: "awards/images/whatsapp-integration.jpg"
    },
    {
      name: "Prime Banking",
      context: "In-product payment gateway and bank integrations (Razorpay, PayU, Paytm)",
      image: "awards/images/prime-banking.jpg"
    },
    {
      name: "Award 5",
      context: "Context for award 5",
      image: "awards/images/award-5.jpg"
    },
    {
      name: "Award 6",
      context: "Context for award 6",
      image: "awards/images/award-6.jpg"
    }
  ],

  mentorship: [
    "Led the 5-day Processes, Methodology & Tools (PMT) training for 100+ trainees over 2 years.",
    "Mentored 8 trainees through 6-month induction; conducted code reviews & assessments driving quality across optimization, style, and best practices.",
    "Trained Senior QA engineers on C++ and OS fundamentals, enabling a shift from black-box to gray-box testing.",
    "Served as Guide for the inaugural Tally CodeBrewers hackathon — now attracts 15,000+ students annually across India.",
    "Spearheading an internal upskilling initiative on technology fundamentals across Dev, QA & PM teams, with 100+ employees participating regularly."
  ]
};
