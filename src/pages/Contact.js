import React from "react";
import Dept from "../components/Dept";
import OwlDepartments from "../components/OwlDepartments";
const Contact = () => {
  return (
    <section>
      <Dept
        deptName="Contact Us"
        showcasePic="/resources/design/hospitalpic.jpg"
        showcaseText="Gupta Hospital is strategically located in the heart of the city of Dhamtari. It caters patients from Bastar, Balod, Kurud, Bhakhara, Nagri and nrearby regions of Orrisa also. It  provide residential accommodation to doctors and staff members. It is also an academic and a researchinstitute"
        info_3_heading="Ways to contact us "
        info_3_text=""
        info_3_list="Phone : 07722737361 <br> Mobile : 9644009065  <br> email : guptahospitaldmt@gmail.com <br> Postal Address : Gupta Hospital, Ratnabandha Road, Near Rest House, Dhamtari (C.G.) PIN-493773"
        info_2_heading=""
        info_2_text=""
        info_2_list=""
        info_1_heading=""
        info_1_text=""
        info_1_list=""
        extra_heading=""
        extra_card_pic=""
        extra_card_text=""
      />
    </section>
  );
};

export default Contact;
