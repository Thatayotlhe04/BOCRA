// ══════════════════════════════════════════════════════════
// BOCRA Virtual Assistant — Knowledge Base
// Sourced from bocra.org.bw, CRA Act 2012, and public docs
// ══════════════════════════════════════════════════════════

export interface KBEntry {
  keywords: string[];
  question: string;
  answer: string;
  category: "general" | "complaints" | "licensing" | "domains" | "type-approval" | "cybersecurity" | "consumer" | "contact";
}

export const knowledgeBase: KBEntry[] = [
  // ── GENERAL / ABOUT BOCRA ──
  {
    keywords: ["what", "bocra", "who", "about", "organisation", "organization"],
    question: "What is BOCRA?",
    answer: "BOCRA (Botswana Communications Regulatory Authority) is an independent regulatory body established on 1 April 2013 through the Communications Regulatory Authority Act, 2012 (CRA Act). BOCRA regulates telecommunications, internet and ICT, radio communications, broadcasting, postal services, and related matters in Botswana.",
    category: "general",
  },
  {
    keywords: ["mandate", "role", "responsibility", "purpose", "function", "what does bocra do"],
    question: "What is BOCRA's mandate?",
    answer: "BOCRA's mandate is to regulate the communications sector for the promotion of competition, innovation, consumer protection, and universal access. This includes issuing licences, enforcing compliance, protecting consumers from unfair practices, managing radio frequency spectrum, and administering the .BW country code top-level domain.",
    category: "general",
  },
  {
    keywords: ["vision", "mission"],
    question: "What is BOCRA's vision and mission?",
    answer: "Vision: A Connected and Digitally Driven Society.\n\nMission: To regulate the Communications sector for the promotion of competition, innovation, consumer protection and universal access.\n\nBOCRA's strategic plan for 2024-2029 focuses on placing Botswana at the centre of the global digital economy.",
    category: "general",
  },
  {
    keywords: ["values", "integrity", "excellence"],
    question: "What are BOCRA's core values?",
    answer: "BOCRA operates on four core values:\n\n• Excellence — Striving to be a world-class leader in regulatory services\n• Proactiveness — Being forward-looking in delivering on the mandate\n• Integrity — Demonstrating openness, honesty, and accountability\n• People — Harnessing individual skills and strengths to work as one team",
    category: "general",
  },
  {
    keywords: ["cra", "act", "law", "legislation", "established", "when", "founded", "history"],
    question: "When was BOCRA established?",
    answer: "BOCRA was established on 1 April 2013 through the Communications Regulatory Authority Act, 2012 (CRA Act). The CRA Act replaced the Broadcasting Act [Cap 72:04] and the Telecommunications Act [Cap 72:03], and amended the Postal Services Act to create a single, converged regulatory authority for the entire communications industry.",
    category: "general",
  },
  {
    keywords: ["sector", "regulate", "industry", "telecom", "broadcast", "postal", "internet"],
    question: "What sectors does BOCRA regulate?",
    answer: "BOCRA regulates four key sectors:\n\n1. Telecommunications — Mobile, fixed-line, and satellite communications (operators: Mascom, Orange, BTC/beMOBILE)\n2. Broadcasting — Commercial radio and television licensing and monitoring\n3. Postal Services — Oversight of postal and courier service providers (BotswanaPost and licensed couriers)\n4. Internet & ICT — Ensuring accessible, affordable connectivity and managing the .BW domain",
    category: "general",
  },
  {
    keywords: ["operator", "provider", "mascom", "orange", "btc", "bemobile", "bofinet"],
    question: "Who are the main telecom operators in Botswana?",
    answer: "The three Public Telecommunications Operators (PTOs) in Botswana are:\n\n• Mascom Wireless — Mobile operator\n• Orange Botswana — Mobile operator\n• BTC (Botswana Telecommunications Corporation Limited) — Fixed and mobile (beMOBILE)\n\nBoFiNet (Botswana Fibre Networks) operates as the wholesale provider of national and international telecommunications infrastructure.",
    category: "general",
  },
  {
    keywords: ["spectrum", "frequency", "radio"],
    question: "What is radio frequency spectrum management?",
    answer: "BOCRA manages the radio frequency spectrum in Botswana as a national resource. This involves allocating frequencies to operators, preventing harmful interference, and ensuring efficient use. All radio communication equipment must be type-approved by BOCRA. Botswana is a member of ITU Region 1, and spectrum allocation follows international standards.",
    category: "general",
  },
  {
    keywords: ["uasf", "universal", "access", "fund", "rural"],
    question: "What is the Universal Access Service Fund (UASF)?",
    answer: "The UASF (Universal Access and Service Fund) is managed by BOCRA to finance telecommunications infrastructure in underserved areas where commercial deployment would be uneconomic. The fund supports bringing connectivity to rural and remote communities across Botswana, helping bridge the digital divide.",
    category: "general",
  },
  {
    keywords: ["data", "protection", "privacy", "bdpa", "personal"],
    question: "How does BOCRA handle data protection?",
    answer: "BOCRA is committed to protecting personal data in accordance with the Botswana Data Protection Act, 2024 (BDPA). When you submit information to BOCRA (such as complaints or licence applications), your personal data is collected, processed, and stored only as needed to deliver services. BOCRA does not share personal data with third parties except as required by law or to resolve your specific complaint with the relevant service provider.",
    category: "general",
  },

  // ── COMPLAINTS ──
  {
    keywords: ["complaint", "file", "submit", "how", "lodge", "make"],
    question: "How do I file a complaint?",
    answer: "To file a complaint with BOCRA:\n\n1. First, try to resolve the issue directly with your service provider — speak to their customer service manager\n2. If unsatisfied after exhausting the provider's channels, file with BOCRA\n3. On this platform, go to Complaints → File New Complaint\n4. Follow the 4-step process: select provider, describe the issue, upload evidence (optional), review and submit\n5. You'll receive a unique tracking ID (e.g. CMP-2026-0001) to monitor your case\n\nYou can also file by post, email (info@bocra.org.bw), fax, or hand delivery to Plot 50671, Independence Avenue, Gaborone.",
    category: "complaints",
  },
  {
    keywords: ["track", "status", "check", "progress", "cmp", "tracking", "id"],
    question: "How do I track my complaint?",
    answer: "Go to Complaints → Track Complaint and enter your tracking ID (format: CMP-2026-XXXX). You'll see a live timeline showing every step — from submission to resolution. Each status update is logged with timestamps.\n\nThe tracking ID functions like a secure access key — only someone with the exact ID can view the complaint details.",
    category: "complaints",
  },
  {
    keywords: ["complaint", "type", "what", "kind", "category", "billing", "network", "quality"],
    question: "What types of complaints can I file?",
    answer: "You can file complaints about:\n\n• Billing & Charges — Incorrect charges, unauthorized deductions, disputed invoices\n• Service Quality — Poor call quality, dropped calls, slow internet speeds\n• Network Coverage — Dead zones, lack of coverage in your area\n• Number Porting — Issues transferring your number between operators\n• Contract Disputes — Unfair terms, early termination penalties\n• Data Privacy — Unauthorized use of your personal information\n\nComplaints can be filed against any licensed telecom, broadcasting, or postal provider in Botswana.",
    category: "complaints",
  },
  {
    keywords: ["how long", "time", "resolve", "resolution", "days", "duration", "wait"],
    question: "How long does complaint resolution take?",
    answer: "BOCRA aims to acknowledge complaints within 2 working days of receipt. Most complaints are resolved within 14 business days. Complex cases may take up to 30 days, but you will be kept informed of progress throughout. You can check your complaint status at any time using your tracking ID.",
    category: "complaints",
  },
  {
    keywords: ["first", "provider", "before", "direct", "exhaust"],
    question: "Do I need to contact my provider first?",
    answer: "Yes. BOCRA requires that you first attempt to resolve the issue directly with your service provider. Contact their customer service, speak to a manager, and keep records of all communications. If the provider fails to resolve your issue within a reasonable time (typically 14 days), or if you're unsatisfied with their response, you can then escalate to BOCRA.",
    category: "complaints",
  },
  {
    keywords: ["evidence", "proof", "document", "upload", "support", "attach"],
    question: "What evidence should I provide?",
    answer: "Keep all relevant documentation including:\n\n• Copies of bills and invoices\n• Correspondence with the provider (emails, letters, SMS)\n• Screenshots of errors or issues\n• Contract or service agreement\n• Notes from phone conversations (dates, names, what was discussed)\n\nImportant: Do not send original documents — always keep copies for your records.",
    category: "complaints",
  },
  {
    keywords: ["investigate", "process", "what happens", "after", "next"],
    question: "What happens after I file a complaint?",
    answer: "After filing:\n\n1. Submitted — Your complaint is registered in the system\n2. Acknowledged — BOCRA confirms receipt (within 2 days) and notifies you\n3. Under Investigation — BOCRA forwards the complaint to the provider and requests a response\n4. Review — A BOCRA compliance officer reviews the provider's response\n5. Resolved — BOCRA issues a final decision and the case is closed\n\nYou're kept informed at every step through your tracking dashboard.",
    category: "complaints",
  },

  // ── LICENSING ──
  {
    keywords: ["licence", "license", "apply", "application", "get", "need", "obtain"],
    question: "How do I apply for a licence?",
    answer: "BOCRA issues licences for telecommunications, broadcasting, postal, and radio communication services. To apply:\n\n1. Visit the Licensing Portal on this platform\n2. Select the licence type you need\n3. Complete the application form with required documentation\n4. Pay the applicable fee\n5. BOCRA reviews your application (typically 14-21 business days)\n\nYou can also submit applications directly to BOCRA's offices at Plot 50671, Independence Avenue, Gaborone.",
    category: "licensing",
  },
  {
    keywords: ["licence", "license", "type", "kind", "list", "available", "category"],
    question: "What types of licences does BOCRA issue?",
    answer: "BOCRA issues the following licence types:\n\n• Public Telecommunications Operator (PTO) Licence\n• Broadcasting Licence (commercial radio & TV)\n• Private Telecommunications Network Licence (PTNL)\n• Value Added Network Services (VANS) Licence\n• Radio Frequency Licence\n• Radio Dealers Licence\n• Amateur Radio Licence\n• Aircraft Radio Licence\n• Point-to-Point & Point-to-Multipoint Licences\n• Citizen Band Radio Licence\n• Satellite Service Licence\n• Postal Services Licence\n• Type Approval Licence",
    category: "licensing",
  },
  {
    keywords: ["licence", "license", "verify", "check", "valid", "status", "confirm"],
    question: "How do I verify a licence?",
    answer: "You can verify whether a service provider or entity holds a valid BOCRA licence through our Licensing Portal. Enter the licence number or operator name to check its current status (active, suspended, expired, or revoked). This helps consumers confirm they're dealing with a legitimately licensed provider.",
    category: "licensing",
  },
  {
    keywords: ["licence", "license", "fee", "cost", "price", "how much"],
    question: "What are licence fees?",
    answer: "Licence fees vary depending on the type and scope of the licence. Application fees and annual licence fees are published in the BOCRA fee schedule. For specific pricing, please contact BOCRA directly at +267 395 7755 or info@bocra.org.bw, or visit the Licensing section of our platform.",
    category: "licensing",
  },

  // ── .BW DOMAINS ──
  {
    keywords: ["domain", ".bw", "register", "website", "url"],
    question: "How do I register a .BW domain?",
    answer: "BOCRA manages the .BW country code top-level domain (ccTLD) as a national resource. To register a .BW domain:\n\n1. Visit the .BW Domain Registry section on this platform\n2. Search for your desired domain name to check availability\n3. Complete the registration form\n4. Pay the registration fee\n\nAvailable second-level domains include .co.bw (commercial), .org.bw (organizations), and .ac.bw (academic). Over 35,000 .BW domains are currently registered.",
    category: "domains",
  },
  {
    keywords: ["domain", "transfer", "renew", "dns", "manage"],
    question: "How do I manage my .BW domain?",
    answer: "To manage, renew, or transfer an existing .BW domain, sign in to your account on this platform and navigate to the .BW Domain Registry section. From there you can update DNS records, renew your registration, or initiate a transfer. For domain disputes, contact BOCRA at info@bocra.org.bw.",
    category: "domains",
  },

  // ── TYPE APPROVAL ──
  {
    keywords: ["type approval", "equipment", "certified", "device", "approve", "import"],
    question: "What is Type Approval?",
    answer: "Type Approval is BOCRA's certification process under Section 84 of the CRA Act. All communications equipment that will be connected, used, or operated in Botswana must be approved. This ensures devices comply with international standards (ITU Region 1), don't cause harmful interference, and are safe for consumers.\n\nThis applies to mobile phones, routers, satellite equipment, broadcasting equipment, and other radio communication devices.",
    category: "type-approval",
  },
  {
    keywords: ["type approval", "how", "apply", "get", "process", "submit"],
    question: "How do I get Type Approval for a device?",
    answer: "To apply for Type Approval:\n\n1. Submit an application to BOCRA with technical specifications of the equipment\n2. Provide test reports from an accredited laboratory\n3. Include details of the manufacturer and model\n4. Pay the applicable Type Approval fee\n5. BOCRA reviews the application and issues approval if standards are met\n\nYou can search the approved equipment database on our Type Approval portal to check if a device is already certified.",
    category: "type-approval",
  },
  {
    keywords: ["type approval", "search", "check", "approved", "database", "list"],
    question: "How do I check if a device is approved?",
    answer: "Visit the Type Approval section on this platform and use the search function to look up devices by make, model, or approval number. Over 1,200 devices are currently in the approved equipment database. If a device isn't listed, it hasn't been certified for use in Botswana.",
    category: "type-approval",
  },

  // ── CYBERSECURITY ──
  {
    keywords: ["cybersecurity", "security", "threat", "advisory", "scam", "phishing", "fraud"],
    question: "Does BOCRA provide cybersecurity advisories?",
    answer: "Yes. BOCRA publishes cybersecurity advisories to protect citizens and organisations in Botswana. Advisories are categorized by severity:\n\n• HIGH — Immediate action required (active threats)\n• MEDIUM — Action recommended (emerging risks)\n• LOW — Awareness (general security guidance)\n\nVisit our Cybersecurity Advisories section for the latest alerts on phishing campaigns, malware, SIM swap fraud, and other threats.",
    category: "cybersecurity",
  },
  {
    keywords: ["sim swap", "sim", "fraud", "stolen"],
    question: "What is SIM swap fraud?",
    answer: "SIM swap fraud occurs when criminals convince your mobile operator to transfer your phone number to a new SIM card they control. They can then intercept your calls, SMS, and two-factor authentication codes.\n\nTo protect yourself:\n• Never share your PIN or personal details over the phone\n• Set up a SIM lock with your operator\n• Use app-based authentication instead of SMS where possible\n• Report any unexpected loss of signal immediately to your operator\n\nIf you suspect you're a victim, contact your operator immediately and file a complaint with BOCRA.",
    category: "cybersecurity",
  },
  {
    keywords: ["scam", "sms", "message", "prize", "won", "grant"],
    question: "How do I identify SMS/phone scams?",
    answer: "Common scam signs:\n\n• Messages claiming you've won a prize you never entered\n• Requests for personal or banking information via SMS\n• Offers of government grants requiring upfront payment\n• Calls from unknown numbers asking for PIN or OTP\n• Links to suspicious websites\n\nBOCRA advises: Never share personal information or send money to unknown parties. Legitimate organisations will never ask for your password or PIN. Report scams to BOCRA and your service provider.",
    category: "cybersecurity",
  },

  // ── CONSUMER RIGHTS ──
  {
    keywords: ["consumer", "right", "rights", "protection", "entitled"],
    question: "What are my consumer rights?",
    answer: "Under the CRA Act and Consumer Protection Act 2018, you have the right to:\n\n• Access — Connect to telecommunications services\n• Choose — Select from competing service providers\n• Information — Receive clear information about services, terms, and pricing\n• Fair treatment — Be protected from unfair business practices\n• Privacy — Have your personal data protected\n• Quality — Receive services of acceptable quality\n• Redress — File complaints and receive resolution\n• Representation — Have your interests represented\n\nIf any of these rights are violated, file a complaint with BOCRA.",
    category: "consumer",
  },
  {
    keywords: ["tariff", "price", "data", "cost", "rate", "charges", "expensive"],
    question: "Does BOCRA regulate tariffs and data prices?",
    answer: "Yes. BOCRA reviews and approves telecommunications tariffs to ensure they are fair and competitive. BOCRA has the authority to order price reductions if tariffs are found to be unreasonable. Recently, BOCRA approved reduced data prices for BTC, benefiting consumers. If you believe you're being overcharged, you can file a complaint.",
    category: "consumer",
  },
  {
    keywords: ["number", "porting", "port", "keep", "change", "switch", "transfer number"],
    question: "What is number porting?",
    answer: "Number porting allows you to keep your existing phone number when switching between mobile operators (e.g., from Mascom to Orange). This is your legal right under BOCRA regulations. Your new operator should handle the porting process for you, and it should be completed within a reasonable time. If you experience issues, file a complaint with BOCRA.",
    category: "consumer",
  },

  // ── CONTACT ──
  {
    keywords: ["contact", "phone", "email", "address", "reach", "call", "location", "office", "where"],
    question: "How can I contact BOCRA?",
    answer: "You can reach BOCRA through:\n\nPhone: +267 395 7755\nFax: +267 395 7976\nEmail: info@bocra.org.bw\n\nPhysical Address:\nPlot 50671, Independence Avenue\nGaborone, Botswana\n\nPostal Address:\nPrivate Bag 00495\nGaborone\n\nOffice hours: Monday – Friday, 07:30 – 16:30 CAT\n\nYou can also use the Virtual Assistant on this platform for instant answers.",
    category: "contact",
  },
  {
    keywords: ["operator", "portal", "licensee", "data collection", "op-web"],
    question: "What is the Operator Portal?",
    answer: "The BOCRA Operator Portal (op-web.bocra.org.bw) is a separate platform designed for licensed service providers to submit regulatory data to BOCRA. It is not for general public use. If you are a licensed operator needing access, contact BOCRA directly at +267 395 7755.",
    category: "contact",
  },
  {
    keywords: ["complaint", "consumer affairs", "manager"],
    question: "How do I reach the Consumer Affairs department?",
    answer: "For complaint-related queries, contact the Consumer Affairs Manager or Compliance Department directly at +267 395 7755. You can also email complaints to info@bocra.org.bw or file through this platform at Complaints → File New Complaint.",
    category: "contact",
  },

  // ── PLATFORM-SPECIFIC ──
  {
    keywords: ["this", "platform", "website", "site", "new", "different"],
    question: "What is this platform?",
    answer: "This is BOCRA's reimagined digital platform — a citizen-centric portal that puts services front and centre. Key features include:\n\n• File & Track Complaints — 4-step filing with real-time Uber-style tracking\n• Licensing Portal — Apply for and verify licences\n• .BW Domain Registry — Register and manage Botswana domains\n• Type Approval — Search the certified equipment database\n• Cybersecurity Advisories — Real-time threat alerts\n• Documents & Consultations — Access regulations and provide public input\n\nBuilt with Next.js, Supabase, and TypeScript, secured with Row Level Security.",
    category: "general",
  },
  {
    keywords: ["setswana", "language", "translate", "tswana"],
    question: "Is this available in Setswana?",
    answer: "Setswana language support is in development. The Virtual Assistant can understand basic Setswana greetings — try saying 'Dumelang!' Our goal is to make the platform fully bilingual to serve all Batswana.",
    category: "general",
  },
  {
    keywords: ["dumelang", "dumela", "le kae", "agee", "eeng", "ke kopa"],
    question: "Setswana greeting",
    answer: "Dumelang! Ke BOCRA Virtual Assistant. Ke ka go thusa ka dipotso tsa gago mabapi le telecommunications, broadcasting, le postal services mo Botswana. Bua ka Sekgoa kgotsa Setswana, ke tla leka go go thusa. 🇧🇼",
    category: "general",
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    question: "Greeting",
    answer: "Dumelang! Welcome to BOCRA's Virtual Assistant. I can help you with:\n\n• Filing or tracking complaints\n• Licensing information\n• .BW domain registration\n• Type Approval queries\n• Cybersecurity advisories\n• Consumer rights\n• Contact information\n\nWhat would you like to know?",
    category: "general",
  },
  {
    keywords: ["thank", "thanks", "cheers", "appreciate"],
    question: "Thanks",
    answer: "You're welcome! If you have any other questions about BOCRA's services, I'm here to help. You can also reach BOCRA directly at +267 395 7755 or info@bocra.org.bw. Go siame! 🇧🇼",
    category: "general",
  },
];

// ── Matching engine ──
export function findBestMatch(query: string): string {
  const q = query.toLowerCase().trim();

  // Score each entry
  let bestScore = 0;
  let bestAnswer = "";

  for (const entry of knowledgeBase) {
    let score = 0;

    // Check keyword matches
    for (const kw of entry.keywords) {
      if (q.includes(kw.toLowerCase())) {
        // Longer keyword matches are worth more
        score += kw.length;
      }
    }

    // Bonus for question similarity
    const qWords = q.split(/\s+/);
    const entryQWords = entry.question.toLowerCase().split(/\s+/);
    for (const word of qWords) {
      if (word.length > 2 && entryQWords.includes(word)) {
        score += 2;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  // Minimum threshold to avoid garbage matches
  if (bestScore >= 3) {
    return bestAnswer;
  }

  // Default response
  return "I don't have specific information on that topic, but I can help with complaints, licensing, .BW domains, type approval, cybersecurity, and consumer rights. You can also contact BOCRA directly at +267 395 7755 or info@bocra.org.bw.\n\nTry asking about:\n• How to file a complaint\n• Consumer rights\n• Type Approval process\n• .BW domain registration";
}
