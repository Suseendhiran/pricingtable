import "./App.css";
import PricingTable from "./Components/PricingTable";

function App() {
  const subscriptionDetails = [
    {
      price: 0,
      accessabilities: [
        { name: "Single User", access: true },
        { name: "5GB Storage", access: true },
        { name: "Unlimited Public Projects", access: true },
        { name: "Community Access", access: true },
        { name: "Unlimited Private Projects", access: false },
        { name: "Dedicated Phone Support", access: false },
        { name: "Free Subdomain", access: false },
        { name: "Monthly Status Reports", access: false },
      ],
    },
    {
      price: 20,
      accessabilities: [
        { name: "Single User", access: true },
        { name: "5GB Storage", access: true },
        { name: "Unlimited Public Projects", access: true },
        { name: "Community Access", access: true },
        { name: "Unlimited Private Projects", access: false },
        { name: "Dedicated Phone Support", access: false },
        { name: "Free Subdomain", access: false },
        { name: "Monthly Status Reports", access: false },
      ],
    },
    {
      price: 50,
      accessabilities: [
        { name: "Single User", access: true },
        { name: "5GB Storage", access: true },
        { name: "Unlimited Public Projects", access: true },
        { name: "Community Access", access: true },
        { name: "Unlimited Private Projects", access: false },
        { name: "Dedicated Phone Support", access: false },
        { name: "Free Subdomain", access: false },
        { name: "Monthly Status Reports", access: false },
      ],
    },
  ];
  return (
    <div className="App">
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <PricingTable subscriptionDetails={subscriptionDetails} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
