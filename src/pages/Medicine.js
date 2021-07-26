import React from "react";
import Dept from "../components/Dept";
const Medicine = () => {
  return (
    <>
      <Dept
        deptName="Inernal Medicine"
        showcasePic="/resources/design/medicine.jpg"
        showcaseText="Internal Medicine specialist at Gupta Hospital provide comprehensive care in general internal medicine and related specialties. Acute medical care is provided by a medical specialist round the clock and outpatient care is made available for at least 12 hours every day to suit everyone's work commitments."
        info_1_heading="Department of Medicine"
        info_1_text="The focus of this specialty is on a meticulous and exhaustive consultation and workup with timely and appropriate cross referrals, which are then followed up by the primary consultants to ensure continuity of patient care and patient comfort."
        info_1_list=""
        info_2_heading="Facilities availbale "
        info_2_text="We conduct special OPD directed at certain common ailments to enable focussed care for"
        info_2_list="Hypertension<br>Metabolic disorders like diabetes and thyroid disease<br>Infections including HIV, tuberculosis and other communicable diseases<br>Chronic pain of different causes<br>Joint disorders<br>Nutritional deficiency disorders"
        extra_heading="Our Consultant"
        extra_card_pic="/resources/doctors/drvivek.jpg"
        extra_card_text="MBBS, MD Medicine"
      />
    </>
  );
};

export default Medicine;
