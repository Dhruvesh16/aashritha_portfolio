import { TrendingUp, BarChart3, Settings, TestTube, ClipboardCheck, Search, Shield, Plane, Camera, DollarSign, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Continuous Improvement Consultant",
    company: "Therma-Stor Capstone Project",
    location: "Madison, WI",
    period: "Sept 2024 – Dec 2024",
    color: "primary",
    achievements: [
      {
        icon: TrendingUp,
        text: "Conducted root cause analysis and developed actionable solutions to reduce inventory stock-outs by",
        highlight: "11%"
      },
      {
        icon: BarChart3,
        text: "Utilized Power BI to visualize production data trends and enhance operational efficiency"
      },
      {
        icon: Settings,
        text: "Implemented DMAIC methodology to streamline order processing, improving efficiency by",
        highlight: "20%"
      },
      {
        icon: Settings,
        text: "Recommended ERP enhancements to reduce delays in material tracking"
      },
      {
        icon: MessageSquare,
        text: "Collaborated across procurement, CSR, and logistics teams to reduce service delays by",
        highlight: "17%"
      }
    ]
  },
  {
    title: "Manufacturing Intern",
    company: "Tech Mahindra",
    location: "Hyderabad, India",
    period: "June 2022 – July 2022",
    color: "secondary",
    achievements: [
      {
        icon: TestTube,
        text: "Supported product quality testing and conducted should-cost analysis on supplier components using non-destructive testing (NDT) methods"
      },
      {
        icon: ClipboardCheck,
        text: "Participated in process audits, evaluated engineering documentation, and helped revise production layouts for efficiency"
      },
      {
        icon: Search,
        text: "Assisted in root cause identification and implemented corrective actions to reduce non-conformance rates"
      },
      {
        icon: Shield,
        text: "Collaborated with quality engineers to ensure compliance with safety and ISO standards"
      }
    ]
  },
  {
    title: "Team Manager",
    company: "AeroMIT – SAE Aero Design, USA",
    location: "",
    period: "June 2021 – July 2022",
    color: "accent",
    achievements: [
      {
        icon: Plane,
        text: "Oversaw mechanical assembly and installation phases for",
        highlight: "10+ aircraft builds",
        text2: ", working closely with suppliers and contractors"
      },
      {
        icon: Camera,
        text: "Maintained detailed photographic documentation and build logs to support weekly project reporting"
      },
      {
        icon: DollarSign,
        text: "Managed supply budgets and performed expense tracking to ensure alignment with project forecasts"
      },
      {
        icon: MessageSquare,
        text: "Communicated with technical and project leads to align scope, timeline, and safety goals"
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-slate-50 to-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600">Proven track record in quality improvement and manufacturing optimization</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative lg:ml-16">
                <div className={`absolute -left-20 top-6 w-4 h-4 rounded-full border-4 border-white shadow-md hidden lg:block ${
                  experience.color === 'primary' ? 'bg-primary' :
                  experience.color === 'secondary' ? 'bg-blue-500' : 'bg-accent'
                }`}></div>
                
                <Card className="bg-white shadow-lg border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">
                          {experience.title}
                        </h3>
                        <p className={`text-lg font-medium ${
                          experience.color === 'primary' ? 'text-primary' :
                          experience.color === 'secondary' ? 'text-blue-500' : 'text-accent'
                        }`}>
                          {experience.company}
                        </p>
                        {experience.location && (
                          <p className="text-slate-600">{experience.location}</p>
                        )}
                      </div>
                      <Badge className={`${
                        experience.color === 'primary' ? 'bg-primary/10 text-primary' :
                        experience.color === 'secondary' ? 'bg-blue-500/10 text-blue-500' : 'bg-accent/10 text-accent'
                      }`}>
                        {experience.period}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-3 text-slate-700">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <achievement.icon className={`text-sm mt-1 flex-shrink-0 ${
                            experience.color === 'primary' ? 'text-accent' :
                            experience.color === 'secondary' ? 'text-blue-500' : 'text-accent'
                          }`} size={16} />
                          <span>
                            {achievement.text}
                            {achievement.highlight && (
                              <span className={`font-semibold ${
                                experience.color === 'primary' ? 'text-accent' :
                                experience.color === 'secondary' ? 'text-blue-500' : 'text-accent'
                              }`}>
                                {' '}{achievement.highlight}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
