import React from "react";

function Index({ plan }) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
          <h6 class="card-price text-center">
            ${plan.price}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            {plan.accessabilities.map((item) => {
              return (
                <li className={`${item.access ? "" : "text-muted"}`}>
                  <span class="fa-li">
                    <i
                      className={`${
                        item.access ? "fas fa-check" : "fas fa-times"
                      }`}
                    ></i>
                  </span>
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
