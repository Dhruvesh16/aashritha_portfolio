import { BarChart3, Settings, Laptop, IdCard, Award, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Data Analysis & Visualization",
    icon: BarChart3,
    color: "primary",
    skills: ["Excel", "Power BI", "SQL", "Python", "Tableau"]
  },
  {
    title: "Quality Tools",
    icon: Settings,
    color: "secondary", 
    skills: ["RCA", "CAPA", "SPC", "FMEA", "MSA"]
  },
  {
    title: "Software & Systems",
    icon: Laptop,
    color: "accent",
    skills: ["SAP", "AutoCAD", "Minitab"]
  },
  {
    title: "QA & Engineering",
    icon: IdCard,
    color: "slate",
    skills: ["ISO 9001/14001", "NDT"]
  }
];

const certifications = [
  {
    title: "Six Sigma Green Belt",
    icon: Award,
    color: "green"
  },
  {
    title: "SQL Bootcamp",
    icon: Database,
    color: "blue"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-slate-50 to-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills & Certifications</h2>
          <p className="text-lg text-slate-600">
            Technical expertise across data analysis, quality systems, and engineering tools
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-sm border-slate-100 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`p-3 rounded-lg w-fit mb-4 ${
                  category.color === 'primary' ? 'bg-primary text-white' :
                  category.color === 'secondary' ? 'bg-blue-500 text-white' :
                  category.color === 'accent' ? 'bg-accent text-white' :
                  'bg-slate-600 text-white'
                }`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`mr-2 mb-2 ${
                        category.color === 'primary' ? 'bg-primary/10 text-primary' :
                        category.color === 'secondary' ? 'bg-blue-500/10 text-blue-500' :
                        category.color === 'accent' ? 'bg-accent/10 text-accent' :
                        'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                className={`px-6 py-3 text-base font-medium shadow-md ${
                  cert.color === 'green' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                }`}
              >
                <cert.icon className="mr-2 h-4 w-4" />
                {cert.title}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
