import React from "react";

function RegPlan() {
  const titles = [
    "Monthly price after free month ends on 2/4/21",
    "Video quality",
    "Resolution",
    "Mobile devices you can download to",
    "Watch on your TV, computer, mobile phone and tablet",
    "Watch on multiple devices at the same time",
    "Unlimited movies and TV shows",
    "Cancel anytime",
    "First month free",
  ];
  const data = [
    {
      plan: "Basic",
      price: "EUR7.99",
      quality: "Good",
      resolution: "720p",
      devices: "1",
      watch: "true",
      multiple: "false",
      unlimited: "true",
      cancel: "true",
      free: "true",
    },
    {
      plan: "Standard",
      price: "EUR9.99",
      quality: "Better",
      resolution: "1080p",
      devices: "2",
      watch: "true",
      multiple: "true",
      unlimited: "true",
      cancel: "true",
      free: "true",
    },
    {
      plan: "Premium",
      price: "EUR11.99",
      quality: "Best",
      resolution: "4K+HDR",
      devices: "4",
      watch: "true",
      multiple: "true",
      unlimited: "true",
      cancel: "true",
      free: "true",
    },
  ];

  return (
    <div>
      <div className="sign-up__price-wrapper">
        <p className="sign-up__plan-step">STEP 1 OF 3</p>
        <h1 className="sign-up__plan-title">
          Choose the plan that’s right for you
        </h1>
        <p className="sign-up__plan-description">
          Downgrade or upgrade at any time.
        </p>
        <div className="sign-up__price-block">
          <div className="sign-up__plan-block">
            <span>Basic</span>
          </div>
          <div className="sign-up__plan-block">
            <span>Standard</span>
          </div>
          <div className="sign-up__plan-block">
            <span>Premium</span>
          </div>
        </div>
        <div className="sign-up__table-wrapper">
          {/* <div className="sign-up__table-row-titles">
            {titles.map((i) => (
              <div className="sign-up__table-titles">{i}</div>
            ))}
          </div>
          {data.map((item, index) => (
            <div className="sign-up__table-row">
              {console.log(item.price.length)}
              <div className="sign-up__table-item">{item.price}</div>
              <div className="sign-up__table-item">{item.quality}</div>
              <div className="sign-up__table-item">{item.resolution}</div>
              <div className="sign-up__table-item">{item.divices}</div>
              <div className="sign-up__table-item">{item.watch}</div>
              <div className="sign-up__table-item">{item.multiple}</div>
              <div className="sign-up__table-item">{item.unlimited}</div>
              <div className="sign-up__table-item">{item.cancel}</div>
              <div className="sign-up__table-item">{item.free}</div>
            </div>
          ))} */}
          <div className="sign-up__table-row-titles">
            <table>
              <tbody>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">
                    Monthly price after free month ends on 2/4/21
                  </td>
                  <td className="sign-up__table-td-item">{data[0].price}</td>
                  <td className="sign-up__table-td-item">{data[1].price}</td>
                  <td className="sign-up__table-td-item">{data[2].price}</td>
                </tr>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">
                    Video quality
                  </td>
                  <td className="sign-up__table-td-item">{data[0].quality}</td>
                  <td className="sign-up__table-td-item">{data[1].quality}</td>
                  <td className="sign-up__table-td-item">{data[2].quality}</td>
                </tr>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">Resolution</td>
                  <td className="sign-up__table-td-item">
                    {data[0].resolution}
                  </td>
                  <td className="sign-up__table-td-item">
                    {data[1].resolution}
                  </td>
                  <td className="sign-up__table-td-item">
                    {data[2].resolution}
                  </td>
                </tr>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">
                    Mobile devices you can download to
                  </td>
                  <td className="sign-up__table-td-item">{data[0].devices}</td>
                  <td className="sign-up__table-td-item">{data[1].devices}</td>
                  <td className="sign-up__table-td-item">{data[2].devices}</td>
                </tr>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">
                    Watch on your TV, computer, mobile phone and tablet
                  </td>
                  <td className="sign-up__table-td-item">{data[0].watch}</td>
                  <td className="sign-up__table-td-item">{data[1].watch}</td>
                  <td className="sign-up__table-td-item">{data[2].watch}</td>
                </tr>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">
                    Watch on multiple devices at the same time
                  </td>
                  <td className="sign-up__table-td-item">{data[0].multiple}</td>
                  <td className="sign-up__table-td-item">{data[1].multiple}</td>
                  <td className="sign-up__table-td-item">{data[2].multiple}</td>
                </tr>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">
                    Unlimited movies and TV shows
                  </td>
                  <td className="sign-up__table-td-item">
                    {data[0].unlimited}
                  </td>
                  <td className="sign-up__table-td-item">
                    {data[1].unlimited}
                  </td>
                  <td className="sign-up__table-td-item">
                    {data[2].unlimited}
                  </td>
                </tr>
                <tr className="sign-up__table-row sign-up__table-row--border">
                  <td className="sign-up__table-td-decription">
                    Cancel anytime
                  </td>
                  <td className="sign-up__table-td-item">{data[0].cancel}</td>
                  <td className="sign-up__table-td-item">{data[1].cancel}</td>
                  <td className="sign-up__table-td-item">{data[2].cancel}</td>
                </tr>
                <tr className="sign-up__table-row">
                  <td className="sign-up__table-td-decription">
                    First month free
                  </td>
                  <td className="sign-up__table-td-item">{data[0].free}</td>
                  <td className="sign-up__table-td-item">{data[1].free}</td>
                  <td className="sign-up__table-td-item">{data[2].free}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegPlan;
