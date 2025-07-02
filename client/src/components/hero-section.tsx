import { useState, useEffect } from "react";
import { MapPin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImagePath from "@/assets/sisterportfolio_1750999747763.jpeg";

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

function AnimatedCounter({ end, duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(end * progress);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}</span>;
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    // Create a resume content based on the provided data
    const resumeContent = `
AASHRITHA MOGALLURU
Madison, WI | mogalluruven@wisc.edu | https://www.linkedin.com/in/aashritha9/

EDUCATION
University of Wisconsin – Madison: Master's in Industrial and Systems Engineering
Sept 2024 - Present
Coursework: Supply Chain Analytics, Engineering Management of Continuous Process Improvement, Quality Assurance Systems
(CGPA:3.5/4)

Manipal Academy of Higher Education: Bachelor's in Mechanical Engineering
July 2019 - May 2023
Coursework: Mechanical Design, Fluid Drives and Controls, Non-Destructive Testing

PROFESSIONAL SUMMARY
Analytical and quality-focused Industrial Engineering graduate student with hands-on experience in quality assurance, data analysis, and continuous improvement in manufacturing environments. Skilled in root cause analysis (RCA), corrective actions (CAPA), quality inspections, and the use of statistical tools (Excel, Power BI, Python) for production data analysis. Experienced in cross-functional collaboration and committed to safety protocols and ISO 9001/14001 compliance. Certified Six Sigma Green Belt with strong organizational and communication skills.

EXPERIENCE
Continuous Improvement Consultant, Therma-Stor Capstone Project – Madison, WI
Sept 2024–Dec 2024
• Conducted root cause analysis and developed actionable solutions to reduce inventory stock-outs by 11%.
• Utilized Power BI to visualize production data trends and enhance operational efficiency.
• Implemented DMAIC methodology to streamline order processing, improving efficiency by 20%.
• Recommended ERP enhancements to reduce delays in material tracking.
• Collaborated across procurement, CSR, and logistics teams to reduce service delays by 17%.

Manufacturing Intern, Tech Mahindra – Hyderabad, India
June 2022–July 2022
• Supported product quality testing and conducted should-cost analysis on supplier components using non-destructive testing (NDT) methods.
• Participated in process audits, evaluated engineering documentation, and helped revise production layouts for efficiency.
• Assisted in root cause identification and implemented corrective actions to reduce non-conformance rates.
• Collaborated with quality engineers to ensure compliance with safety and ISO standards.

Team Manager, AeroMIT – SAE Aero Design, USA
June 2021–July 2022
• Oversaw mechanical assembly and installation phases for 10+ aircraft builds, working closely with suppliers and contractors.
• Maintained detailed photographic documentation and build logs to support weekly project reporting.
• Managed supply budgets and performed expense tracking to ensure alignment with project forecasts.
• Communicated with technical and project leads to align scope, timeline, and safety goals.

PROJECTS
ERPsim Manufacturing Simulation – SAP-Based Business Decision-Making
Mar 2025 - May 2025
• Simulated end-to-end business operations using SAP ERP across procurement, production, logistics, finance, and marketing.
• Analyzed real-time business KPIs to adjust strategy, forecast demand (MD61), execute MRP (MD01), release production (CO41), and optimize pricing (VK32).
• Applied SAP modules for financial reporting (F.01), cash flow (ZFF7B), sales analysis (ZVC2, ZMARKET), and production performance (ZCOOIS).

Walmart Sales Forecasting and Stock Planning Using Machine Learning
Mar 2025 - May 2025
• Developed an ML model (R2: 0.996) to forecast retail sales using regression models (SVM, RF, NN).
• Built interactive Tableau dashboards to visualize seasonal trends and reduce stock loss by ~$175K.

Predictive Analysis for Supply Chain Defect Reduction
Sept 2024 - Dec 2024
• Built a machine learning model (Random Forest) to predict supply chain defect patterns with 87.8% accuracy.
• Prevented an estimated $5.7M in losses by enabling smarter procurement and early defect detection.
• Boosted throughput by 30% by integrating predictive analytics into procurement and inventory management.

ISO 9001 & ISO 14001 Systems Implementation
Sept 2024 – Dec 2024
• Developed and audited Quality Management System (QMS) manuals, process control records, and SOPs.
• Performed root cause analysis (RCA) and implemented CAPA measures to improve supplier performance.
• Led gap analysis and internal audits to assess regulatory compliance with ISO 9001 and ISO 14001 standards.

TECHNICAL SKILLS & CERTIFICATIONS
• Data Analysis & Visualization: Excel, Power BI, SQL, Python, Tableau
• Quality Tools: RCA, CAPA, SPC, FMEA, MSA
• Certifications: Six Sigma Green Belt, SQL Bootcamp
• Software: SAP, AutoCAD, Minitab
• QA & Engineering: ISO 9001/14001, Non-Destructive Testing (NDT)

LEADERSHIP & COMMUNICATION
• Raised $30K in funding and led sourcing upgrades for aircraft development.
• Developed project charters and communication plans to ensure alignment across engineering and procurement teams.
• Achieved World Rank 2 in SAE Aero Design 2022 West.
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aashritha_Mogalluru_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Aashritha <span className="text-primary">Mogalluru</span>
              </h1>
              <p className="text-xl text-slate-600">Industrial & Systems Engineering Graduate</p>
              <p className="text-lg text-slate-500">
                Quality-focused engineer with expertise in continuous improvement, data analysis, and manufacturing optimization
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Madison, WI</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>mogalluruven@wisc.edu</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open('https://www.linkedin.com/in/aashritha9/', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Key Achievements Highlight */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  <AnimatedCounter end={11} />%
                </div>
                <div className="text-sm text-slate-600">Stock-out Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  $<AnimatedCounter end={5.7} decimals={1} />M
                </div>
                <div className="text-sm text-slate-600">Loss Prevention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  <AnimatedCounter end={30} />%
                </div>
                <div className="text-sm text-slate-600">Throughput Boost</div>
              </div>
            </div>
          </div>

          <div className={`flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Card className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/30 border-none shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src={profileImagePath} 
                  alt="Aashritha Mogalluru - Professional Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
