import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import InstructorRoute from "../../components/routes/InstructorRoute";
import axios from "axios";
import { stripeCurrencyFormatter } from "../../utils/helpers";
import {
  DollarCircleOutlined,
  DollarOutlined,
  EuroOutlined,
  SettingOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const InstructorEarning = () => {
  const [balance, setBalance] = useState({ pending: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sendBalanceRequest();
  });

  const sendBalanceRequest = async () => {
    const { data } = await axios.get(
      "https://kursonomia-server.onrender.com/api/instructor/balance"
    );
    setBalance(data);
  };

  const handlePayoutSettings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://kursonomia-server.onrender.com/api/instructor/payout-settings"
      );
      window.location.href = data;
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Unable to Access Payout Settings. Try again!");
    }
  };

  return (
    <InstructorRoute>
      <div className="container">
        <div className="row pt-2">
          <div
            className="col-md-8 offset-md-2 p-5 mt-4"
            style={{ backgroundColor: "#d8d7d8" }}
          >
            <h1 className="text-dark">
              Earnings Report <EuroOutlined className="float-end" />
              {""}
            </h1>
            <small>
              You get paid directly from Stripe to your Bank Account every 72
              hours
            </small>
            <hr />
            <h4 className="mt-4">
              Pending Balance
              {balance.pending &&
                balance.pending.map((bp, i) => (
                  <span key={i} className="float-end">
                    {stripeCurrencyFormatter(bp)}
                  </span>
                ))}
            </h4>
            <small>For last 72 hours</small>
            <hr />
            <h4 className="mt-4">
              Payouts{" "}
              {!loading ? (
                <SettingOutlined
                  className="float-end"
                  onClick={handlePayoutSettings}
                />
              ) : (
                <SyncOutlined spin className="float-end" />
              )}
            </h4>
            <small>
              Update your Stripe account details or view previous payouts
            </small>
          </div>
        </div>
      </div>
    </InstructorRoute>
  );
};

export default InstructorEarning;
