import { Card, CardContent } from "@/components/ui/card";
import teamAeromitImage from "@/assets/teamaeromit.jpg";
import leadershipSaeImage from "@/assets/leadershipsae.jpg";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Experience</h2>
          <p className="text-lg text-slate-600">
            Leading innovative projects and achieving excellence in aerospace engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Team Overview Card */}
          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-80 lg:h-96">
              <img
                src={teamAeromitImage}
                alt="AeroMIT Team Organization"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">AeroMIT Team Manager</h3>
              <p className="text-slate-600 mb-4">
                Led a diverse team of engineers in designing and building competition aircraft, achieving World Rank 2 in SAE Aero Design 2022 West.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Managed cross-functional teams across aerodynamics, structures, and systems</li>
                <li>Oversaw the complete aircraft development lifecycle</li>
                <li>Coordinated with suppliers and managed project budgets</li>
                <li>Led technical documentation and competition presentations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Achievement Showcase Card */}
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <img
                src={leadershipSaeImage}
                alt="SAE Competition Success"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Competition Success</h3>
              <p className="text-slate-600 mb-4">
                Guided the team to outstanding achievements in international competitions while maintaining high standards of technical excellence.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900">Key Achievements</h4>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>World Rank 2 in SAE Aero Design 2022 West</li>
                    <li>Successfully raised $30K in funding</li>
                    <li>Led 10+ successful aircraft builds</li>
                    <li>Improved team efficiency by 40%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Leadership Impact</h4>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>Mentored 20+ junior team members</li>
                    <li>Implemented robust documentation practices</li>
                    <li>Enhanced cross-team collaboration</li>
                    <li>Established supplier relationships</li>
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
