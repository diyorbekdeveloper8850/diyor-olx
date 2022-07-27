import React, { useState } from "react";
import { useUserContext } from "../../Contexts/Context";
import "./Elon.scss";
import BolalarDunyosi from "./elonlar/BolalarDunyosi";
import ElektrJihozlari from "./elonlar/ElektrJihozlari";
import Havvonlar from "./elonlar/Havvonlar";
import Ish from "./elonlar/Ish";
import KochmasMulk from "./elonlar/KochmasMulk";
import ModaStil from "./elonlar/ModaStil";
import Transport from "./elonlar/Transport";
import UyBog from "./elonlar/UyBog";
import Xizmatlar from "./elonlar/Xizmatlar";
import XobbiSport from "./elonlar/XobbiSport";
import ModalCategory from "./ModalCategory";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavFot from "../navfot/NavFot";
const bg_color_category = [
  {
    id: 1,
    color: "#ffce32",
  },
  {
    id: 2,
    color: "#3a77ff",
  },
  {
    id: 3,
    color: "#23e5db",
  },
  {
    id: 4,
    color: "#ff5636",
  },
  {
    id: 5,
    color: "#fff6d9",
  },
  {
    id: 6,
    color: "#ceddff",
  },
  {
    id: 7,
    color: "#c8f8f6",
  },
  {
    id: 8,
    color: "#ffd6c9",
  },
  {
    id: 9,
    color: "#ffce32",
  },
  {
    id: 10,
    color: "#ceddff",
  },
  {
    id: 11,
    color: "#c8f8f6",
  },
  {
    id: 12,
    color: "#ffd6c9",
  },
];

function Elon() {
  const {} = useUserContext();
  const [showForm, setShowForm] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [cateItm, setCateItm] = useState([]);

  function toggleModal() {
    setShowModal(!showModal);
  }
  function onShowForm(id) {
    setShowForm(id);
    toggleModal();
  }
  function onCategoryItm(itm) {
    const arr = cateItm;
    const { url, category, id, bg_color } = itm;

    cateItm.unshift({
      url,
      bg_color,
      category,
      id,
    });
    setCateItm(arr);
    console.log(arr);
  }
  return (
    <NavFot>
      <div className="row  ">
        <div className="col-8 offset-2 ">
          <h2 className="text-center">E’lon joylashtirish</h2>
          <h3 className="text-center">
            Bizga e’loningiz haqida gapirib bering
          </h3>
          <hr className="mt-4 mb-2" />

          <div className="row mt-3">
            <label htmlFor="" onClick={toggleModal}>
              Rukn*
            </label>
            <div className="col-6  ">
              {cateItm.length === 0 ? (
                <button
                  className="btn btn-success mt-3 mb-3 pt-3 pb-3 "
                  onClick={toggleModal}
                >
                  Bo‘limni tanlang <ArrowForwardIcon />
                </button>
              ) : (
                <>
                  <>
                    <div
                      className="col-8 category_card mt-3"
                      onClick={toggleModal}
                    >
                      <div
                        id={cateItm[0].id}
                        className={"card card_cate p-2"}
                        style={{ background: cateItm[0].bg_color }}
                      >
                        <div className="row">
                          <div className="col-5">
                            <img
                              src={cateItm[0].url}
                              className="img-fluid"
                              alt="Error!"
                            />
                          </div>
                          <div className="col-7">
                            <strong>{cateItm[0].category} </strong>
                            <ArrowForwardIcon className="icon_" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </>
              )}
            </div>
            <ModalCategory
              onCategoryItm={onCategoryItm}
              showForm={showForm}
              showModal={showModal}
              toggleModal={toggleModal}
              onShowForm={onShowForm}
            />
          </div>
          <div className="row mt-4">
            {cateItm.length === 0 ? null : (
              <>
                <div className={showForm === 1 ? "" : "d-none"}>
                  <Havvonlar />
                </div>
                <div className={showForm === 2 ? "" : "d-none"}>
                  <Transport />
                </div>
                <div className={showForm === 3 ? "" : "d-none"}>
                  <Xizmatlar />
                </div>
                <div className={showForm === 4 ? "" : "d-none"}>
                  <ElektrJihozlari />
                </div>
                <div className={showForm === 5 ? "" : "d-none"}>
                  <Ish />
                </div>
                <div className={showForm === 6 ? "" : "d-none"}>
                  <XobbiSport />
                </div>
                <div className={showForm === 7 ? "" : "d-none"}>
                  <UyBog />
                </div>
                <div className={showForm === 8 ? "" : "d-none"}>
                  <ModaStil />
                </div>
                <div className={showForm === 9 ? "" : "d-none"}>
                  <KochmasMulk />
                </div>
                <div className={showForm === 10 ? "" : "d-none"}>
                  <BolalarDunyosi />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </NavFot>
  );
}

export default Elon;