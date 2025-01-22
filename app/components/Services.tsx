const services = [
  {
    title: "Advanced Data Solutions",
    items: [
      "Cloud Transition & Optimization",
      "Data Storage & Management",
      "Real-Time Data Analytics",
      "Marketing Insights & SEO",
    ],
  },
  {
    title: "Data Engineering & Infrastructure",
    items: ["ETL Process Development", "Big Data Processing & Integration", "Database Architecture & Management"],
  },
  {
    title: "Data Science & Artificial Intelligence",
    items: ["Forecasting & Predictive Analytics", "Machine Learning Solutions", "Text Analysis & NLP"],
  },
  {
    title: "Custom Software Development",
    items: ["Web & Mobile App Development", "API Integration", "Automation Solutions"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc list-inside text-gray-600">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

