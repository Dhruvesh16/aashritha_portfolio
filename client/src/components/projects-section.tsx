import { Server, TrendingUp, Brain, IdCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "ERPsim Manufacturing Simulation",
    subtitle: "SAP-Based Business Decision-Making",
    period: "Mar 2025 - May 2025",
    icon: Server,
    color: "primary",
    achievements: [
      "Simulated end-to-end business operations using SAP ERP across procurement, production, logistics, finance, and marketing",
      "Analyzed real-time business KPIs to adjust strategy, forecast demand (MD61), execute MRP (MD01)",
      "Applied SAP modules for financial reporting and production performance optimization"
    ],
    tags: ["SAP ERP", "Business Analytics", "Supply Chain"]
  },
  {
    title: "Walmart Sales Forecasting",
    subtitle: "Machine Learning & Stock Planning",
    period: "Mar 2025 - May 2025",
    icon: TrendingUp,
    color: "accent",
    achievements: [
      "Developed ML model with R²: 0.996 accuracy using regression models (SVM, RF, NN)",
      "Built interactive Tableau dashboards to visualize seasonal trends",
      "Reduced stock loss by ~$175K through predictive analytics"
    ],
    tags: ["Machine Learning", "Tableau", "Forecasting"],
    highlights: ["R²: 0.996", "~$175K"]
  },
  {
    title: "Predictive Analysis for Supply Chain",
    subtitle: "Defect Reduction & Loss Prevention",
    period: "Sept 2024 - Dec 2024",
    icon: Brain,
    color: "secondary",
    achievements: [
      "Built Random Forest model to predict defect patterns with 87.8% accuracy",
      "Prevented estimated $5.7M in losses through early detection",
      "Boosted throughput by 30% with predictive analytics integration"
    ],
    tags: ["Random Forest", "Python", "Supply Chain"],
    highlights: ["87.8% accuracy", "$5.7M in losses", "30%"]
  },
  {
    title: "ISO 9001 & 14001 Implementation",
    subtitle: "Quality Management Systems",
    period: "Sept 2024 – Dec 2024",
    icon: IdCard,
    color: "slate",
    achievements: [
      "Developed and audited Quality Management System (QMS) manuals and SOPs",
      "Performed root cause analysis (RCA) and implemented CAPA measures",
      "Led gap analysis and internal audits for regulatory compliance"
    ],
    tags: ["ISO 9001", "ISO 14001", "Quality Auditing"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">
            Technical projects showcasing data analysis, machine learning, and process improvement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-shadow duration-300 ${
                project.color === 'primary' ? 'bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/10' :
                project.color === 'accent' ? 'bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20' :
                project.color === 'secondary' ? 'bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20' :
                'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    project.color === 'primary' ? 'bg-primary text-white' :
                    project.color === 'accent' ? 'bg-accent text-white' :
                    project.color === 'secondary' ? 'bg-blue-500 text-white' :
                    'bg-slate-600 text-white'
                  }`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-slate-500">{project.period}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.subtitle}</p>
                
                <ul className="space-y-2 text-slate-700 mb-6">
                  {project.achievements.map((achievement, achievementIndex) => {
                    let displayText = achievement;
                    
                    // Highlight specific metrics if they exist
                    if (project.highlights) {
                      project.highlights.forEach(highlight => {
                        displayText = displayText.replace(
                          highlight,
                          `<span class="font-semibold ${
                            project.color === 'primary' ? 'text-primary' :
                            project.color === 'accent' ? 'text-accent' :
                            project.color === 'secondary' ? 'text-blue-500' :
                            'text-slate-600'
                          }">${highlight}</span>`
                        );
                      });
                    }
                    
                    return (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          project.color === 'primary' ? 'bg-primary' :
                          project.color === 'accent' ? 'bg-accent' :
                          project.color === 'secondary' ? 'bg-blue-500' :
                          'bg-slate-600'
                        }`}></div>
                        <span dangerouslySetInnerHTML={{ __html: displayText }} />
                      </li>
                    );
                  })}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className={`${
                        project.color === 'primary' ? 'bg-primary/10 text-primary' :
                        project.color === 'accent' ? 'bg-accent/10 text-accent' :
                        project.color === 'secondary' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
