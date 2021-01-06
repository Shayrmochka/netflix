import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RegPlan() {
  const data = [
    {
      plan: "Basic",
      price: "EUR7.99",
      quality: "Good",
      resolution: "720p",
      devices: "1",
      watch: true,
      multiple: false,
      unlimited: true,
      cancel: true,
      free: true,
    },
    {
      plan: "Standard",
      price: "EUR9.99",
      quality: "Better",
      resolution: "1080p",
      devices: "2",
      watch: true,
      multiple: true,
      unlimited: true,
      cancel: true,
      free: true,
    },
    {
      plan: "Premium",
      price: "EUR11.99",
      quality: "Best",
      resolution: "4K+HDR",
      devices: "4",
      watch: true,
      multiple: true,
      unlimited: true,
      cancel: true,
      free: true,
    },
  ];

  const [plans, setPlans] = useState([]);
  const [chosenPlan, setChosenPlan] = useState([]);

  useEffect(() => {
    setPlans(data);
    setChosenPlan(data[data.length - 1]);
  }, []);

  const chosePlan = (targetPlan) => {
    setChosenPlan(targetPlan);

    console.log(chosenPlan);
  };

  const svg = {
    yes: () => {
      return (
        <svg
          id="thin-check"
          viewBox="0 0 26 26"
          className="sign-up__thin-check"
          focusable="false"
        >
          <path d="M9.19 22.892L.5 14.198l1.232-1.233 7.236 7.24L23.793.516l1.38 1.04L9.19 22.892"></path>
        </svg>
      );
    },
    no: () => {
      return (
        <svg
          id="thin-x"
          viewBox="0 0 26 26"
          className="sign-up__thin-check"
          focusable="false"
        >
          <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
        </svg>
      );
    },
  };

  return (
    <div>
      {plans.length && chosenPlan.hasOwnProperty("plan") ? (
        <div className="sign-up__price-wrapper">
          <p className="sign-up__plan-step">STEP 1 OF 3</p>
          <h1 className="sign-up__plan-title">
            Choose the plan that’s right for you
          </h1>
          <p className="sign-up__plan-description">
            Downgrade or upgrade at any time.
          </p>
          <div className="sign-up__price-block">
            <div
              className={`sign-up__plan-block sign-up__target-plan-${
                plans[0].plan === chosenPlan.plan
              }`}
              onClick={() => {
                chosePlan(plans[0]);
              }}
            >
              <span>{plans[0].plan}</span>
            </div>
            <div
              className={`sign-up__plan-block sign-up__target-plan-${
                plans[1].plan === chosenPlan.plan
              }`}
              onClick={() => {
                chosePlan(plans[1]);
              }}
            >
              <span>{plans[1].plan}</span>
            </div>
            <div
              className={`sign-up__plan-block sign-up__target-plan-${
                plans[2].plan === chosenPlan.plan
              }`}
              onClick={() => {
                chosePlan(plans[2]);
              }}
            >
              <span>{plans[2].plan}</span>
            </div>
          </div>
          <div className="sign-up__table-wrapper">
            <div className="sign-up__table-row-titles">
              <table>
                <tbody>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">
                      Monthly price after free month ends on 2/4/21
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].price}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].price}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].price}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">
                      Video quality
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].quality}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].quality}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].quality}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">Resolution</td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].resolution}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].resolution}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].resolution}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">
                      Mobile devices you can download to
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].devices}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].devices}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].devices}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">
                      Watch on your TV, computer, mobile phone and tablet
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].watch ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].watch ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].watch ? svg.yes() : svg.no()}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">
                      Watch on multiple devices at the same time
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].multiple ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].multiple ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].multiple ? svg.yes() : svg.no()}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">
                      Unlimited movies and TV shows
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].unlimited ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].unlimited ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].unlimited ? svg.yes() : svg.no()}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row sign-up__table-row--border">
                    <td className="sign-up__table-td-decription">
                      Cancel anytime
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].cancel ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].cancel ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].cancel ? svg.yes() : svg.no()}
                    </td>
                  </tr>
                  <tr className="sign-up__table-row">
                    <td className="sign-up__table-td-decription">
                      First month free
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[0].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[0].free ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[1].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[1].free ? svg.yes() : svg.no()}
                    </td>
                    <td
                      className={`sign-up__table-td-item sign-up__target-item-${
                        plans[2].plan === chosenPlan.plan
                      }`}
                    >
                      {plans[2].free ? svg.yes() : svg.no()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="sign-up__table-description">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your Internet service and device capabilities. Not all
            content available in HD, Full HD, Ultra HD, or HDR. See{" "}
            <Link to="/" className="sign-up__table-description--link">
              Terms of Use
            </Link>{" "}
            for more details.
          </p>
          <div className="sign-up__bottom-button-wrapper">
            <button className="sign-up__continue sign-up__reg-plan-page">
              Continue
            </button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default RegPlan;
