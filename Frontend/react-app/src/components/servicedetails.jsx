import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import "./servicedetails.css";
import ManagerHeader from "../Pages/Managers/ManagerHeader";

function Servicedetails() {
  const componentPDF = useRef();
  const [showcustomer, setshowcustomer] = useState([]);
  const [searchkey, setsearchkey] = useState("");

  //read
  const getfetchdata = async () => {
    try {
      const data = await axios.get("http://localhost:5000/catering");
      console.log(data.data.success);
      if (data.data.success) {
        setshowcustomer(data.data.data);
      }
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getfetchdata();
  }, []);

  //delete
  const handledelete = async (id) => {
    const data = await axios.delete(
      "http://localhost:5000/catering/delete/" + id
    );
    if (data.data.success) {
      getfetchdata();
      console.log(data.data.message);
      alert("catering service deleted Successfully!");
    }
  };
  //generatePDF
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "showd  services ",
    onAfterPrint: () => alert("data save in pdf"),
  });
  //serach
  const handlesearch = (e) => {
    filterdata(searchkey);
  };
  const filterdata = (searchKey) => {
    const filteredData = showcustomer.filter((customer) =>
      customer.place.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowcustomer(filteredData);
  };

  return (
    <>
      <ManagerHeader />
      <div className="showoservices">
        <div className="searchbtn">
          <input
            type="search"
            onChange={(e) => setsearchkey(e.target.value)}
            placeholder="search"
            className="in"
          />{" "}
          <t></t>
          <button id="search-btn" onClick={(e) => handlesearch(e)}>
            {" "}
            search{" "}
          </button>
        </div>
        <div ref={componentPDF} style={{ width: "100%" }}>
          <table>
            <tr>
              <th>Date </th>
              <th>Place </th>
              <th>Dilivey Option</th>
              <th>Headcount</th>
              <th>Menu ID</th>
              <th>Request</th>
              <th>Action</th>
            </tr>
            <table>
              {showcustomer.map((e1) => {
                return (
                  <tr>
                    <td> {e1.Date}</td>
                    <td> {e1.Location}</td>
                    <td> {e1.Dilivery_options}</td>
                    <td> {e1.Headcount}</td>
                    <td> {e1.Menu_id}</td>
                    <td> {e1.Special_request}</td>
                    <td className="dback">
                      <a href={`/update_service/${e1._id}`}>Edit Details</a>
                      <button onClick={() => handledelete(e1._id)}>
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </table>
        </div>
        <br></br>
        <button onClick={generatePDF}>Download Repoart</button>
      </div>
    </>
  );
}
export default Servicedetails;
