import { Lightbulb, PenTool, Rocket, RefreshCw } from "lucide-react"

const processes = [
  {
    title: "Understand & Align",
    description:
      "We partner with your team to deeply understand your business goals and challenges, ensuring our approach aligns with your vision.",
    icon: Lightbulb,
  },
  {
    title: "Tailored Planning",
    description:
      "Our specialists design a personalized strategy that addresses your specific objectives and sets a clear path to success.",
    icon: PenTool,
  },
  {
    title: "Seamless Execution",
    description:
      "We implement solutions with precision, leveraging best practices and advanced technologies to deliver exceptional outcomes.",
    icon: Rocket,
  },
  {
    title: "Continuous Enhancement",
    description:
      "After delivery, we provide ongoing support and fine-tune solutions to ensure lasting success and optimal performance.",
    icon: RefreshCw,
  },
]

export default function OurProcess() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <process.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

