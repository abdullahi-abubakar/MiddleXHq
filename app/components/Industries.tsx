const industries = [
  "Banking and Financial Services",
  "Retail and eCommerce",
  "Manufacturing and Logistics",
  "Healthcare and Pharmaceuticals",
  "Telecommunications",
  "Media and Entertainment",
  "Mining and Energy",
  "Hospitality and Tourism",
  "Transportation and Automotive",
  "Real Estate and Property Management",
  "Government and Public Sector",
  "Agriculture",
]

export default function Industries() {
  return (
    <section id="industries" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-700">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

