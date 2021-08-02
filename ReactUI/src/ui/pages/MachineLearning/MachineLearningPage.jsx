import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import MachineLearning from "../../modules/machine-learning/FileUpload";
import Table from "../../components/materialUI/AnalizeML"

function MachineLearningPage() {
  // return <SideBar page={MachineLearning} />;
  return <SideBar page={Table} />
}

export default MachineLearningPage;
