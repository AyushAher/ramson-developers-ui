export function WhatWeDo() {
  type Services = {
    body: string;
    title: string;
  };

  const servicesArray: Services[] = [
    {
      title: "Website Design & Development",
      body: "Create a stunning and user-friendly website to showcase your brand and attract new customers.",
    },
    {
      title: "Custom Applications",
      body: "Streamline your operations with bespoke applications tailored to your unique business needs.",
    },
    {
      title: "Cloud Consultancy",
      body: "Unlock the power of the cloud with our expert Amazon Web Services (AWS) consulting services.",
    },
    {
      title: "Solutions Architects",
      body: "Our architects craft robust and scalable IT solutions that grow with your business.",
    },
    {
      title: "IT Consulting",
      body: "Get expert guidance from our tech gurus to navigate the ever-evolving IT landscape and discover the perfect tools to empower your team.",
    },
    {
      title: "DevSecOps Services",
      body: "Integrate security seamlessly into your development and operations processes with our DevSecOps expertise.",
    },
    {
      title: "Smart Books",
      body: "Revolutionize your accounting with our Smart Books solution, get all accounting softwares like Tally, SPEQTA, WinMan-TDS, etc. on a subscription basis.",
    },
  ];
  return (
    <div className="what-we-do my-5" id="what-we-do">
      <h4 className="theme-color text-center">
        What We <span className="fw-bold">Do?</span>
      </h4>
      <div className="cards-layout">
        {servicesArray.map((x, index) => (
          <div className="custom-card" key={x.title}>
            <div className="body">
              <div className="d-flex justify-content-between">
                <div className="card-number">{index + 1}</div>
                <h4 className="card-title">{x.title}</h4>
              </div>
              <p className="card-body">{x.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
