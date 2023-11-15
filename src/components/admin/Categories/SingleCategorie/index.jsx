import { useState } from "react";

import NameInput from "./NameInput";
import SubCategories from "./SubCategories";
import Actions from "./Actions";
import Images from "./Images";

const SingleCategorie = ({ categorie }) => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="card shadow mb-3">
      <div className="card-header p-3">
        <strong>{categorie.name}</strong>
      </div>
      <div className="card-body p-3">
        <label>
          <i className="fas fa-play"></i> Categorie name:
        </label>
        <NameInput categorie={categorie} />
        <label>
          <i className="fas fa-play"></i> Categorie images:
        </label>
        <Images categorie={categorie} />
        <label>
          <i className="fas fa-play"></i> Subcategories:
        </label>

        <SubCategories categorie={categorie} />
      </div>
      <div className="card-footer p-3">
        <Actions categorie={categorie} />
      </div>
    </div>
  );
};

export default SingleCategorie;
