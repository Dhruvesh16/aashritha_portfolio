import { GraduationCap, Cog, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
          <p className="text-lg text-slate-600">Academic foundation in engineering and systems optimization</p>
        </div>

        <div className="space-y-8">
          {/* Master's Degree */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Master's in Industrial and Systems Engineering
                      </h3>
                      <p className="text-lg font-medium text-primary mb-1">
                        University of Wisconsin – Madison
                      </p>
                      <p className="text-slate-600 mb-3">Sept 2024 - Present</p>
                      <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                        CGPA: 3.5/4.0
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Coursework</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Supply Chain Analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Engineering Management of Continuous Process Improvement
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Quality Assurance Systems
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bachelor's Degree */}
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-600 text-white p-3 rounded-lg">
                      <Cog className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Bachelor's in Mechanical Engineering
                      </h3>
                      <p className="text-lg font-medium text-slate-700 mb-1">
                        Manipal Academy of Higher Education
                      </p>
                      <p className="text-slate-600 mb-3">July 2019 - May 2023</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Coursework</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      Mechanical Design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      Fluid Drives and Controls
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      Non-Destructive Testing
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
