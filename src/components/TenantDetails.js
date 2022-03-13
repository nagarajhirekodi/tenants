import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

const TenantDetails = ({ details }) => {
  const {
    id = "",
    name = "",
    status = "",
    type = "",
    description = "",
    code = "",
  } = details;

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h2>
        {"Tenant Details"}{" "}
        <button
          style={{ position: "absolute", right: 30 }}
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </h2>
      <div>
        <div>
          <strong>{"ID "}</strong>
          {": "}
          <span>{id}</span>
        </div>
        <div>
          <strong>{"Name "}</strong>
          {": "}
          <span>{name}</span>
        </div>
        <div>
          <strong>{"Status "}</strong>
          {": "}
          <span>{status}</span>
        </div>
        <div>
          <strong>{"Type "}</strong>
          {": "}
          <span>{type}</span>
        </div>
        <div>
          <strong>{"Code "}</strong>
          {": "}
          <span>{code}</span>
        </div>
        <div>
          <strong>{"Description "}</strong>
          {": "}
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const tenants = state.tenants;
  return {
    details: tenants.details,
  };
};

export default connect(mapStateToProps, null)(TenantDetails);
