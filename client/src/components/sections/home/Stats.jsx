import {
  Rocket,
  Users,
  Award,
  ShieldCheck,
} from "lucide-react";

import Container from "../../ui/Container";

const stats = [
  {
    icon: Rocket,
    number: "50+",
    title: "Projects Completed",
  },
  {
    icon: Users,
    number: "30+",
    title: "Happy Clients",
  },
  {
    icon: Award,
    number: "2+",
    title: "Years Experience",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Client Satisfaction",
  },
];

const Stats = () => {
  return (
    <section   data-aos="fade-up"
    className="mt-20 mb-24">
      <Container>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group
                rounded-3xl
                border border-violet-500/15
                bg-[#141224]
                p-8
                transition-all
                duration-500
                hover:border-violet-500/40
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
                "
              >
                <div className="flex items-center gap-4">

                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-violet-600/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-violet-600/20
                    transition
                    "
                  >
                    <Icon
                      className="text-violet-400"
                      size={28}
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {item.number}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      {item.title}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default Stats;