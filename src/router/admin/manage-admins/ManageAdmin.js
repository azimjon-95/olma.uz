import React from "react";
import CreateAdmins from "../create-admins/CreateAdmins";
import ReadAdmins from "../../../components/read-admins/ReadAdmins";
import "./ManageAdmin.css";

function ManageAdmin() {
  return (
    <div className="manageadmins_wrapper">
      <CreateAdmins />
      <ReadAdmins />
    </div>
  );
}

export default ManageAdmin;
