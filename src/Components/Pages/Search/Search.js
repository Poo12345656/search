import React from "react";
import { BsSearch } from "react-icons/bs";
import Layout from "../../Shared/Layout/Layout";
import Input from "../../Shared/Input";
import List from "../../Shared/List";
import "./style.css";
import { useState } from "react";
import Table from "../../Shared/Table/Table";
const defaultList = ["JavaScript", "React", "Java", "C++", "HTML", "CSS"];
const col = ["First Name", "Last Name", "Email Address", "Mo.Number"];
const row = [
  ["Sivani", "Sharma", "shi@gmail.com", "7689050987"],
  ["Prem", "Rathore", "prem@gmail.com", "7689255557"],
  ["Roshani", "Verma", "shi@gmail.com", "7689050987"],
  ["Sivata", "Parmar", "shi@gmail.com", "7689050987"],
  ["Shreysh", "Mule", "shi@gmail.com", "7689050987"],
];
console.log(row);
function Search() {
  // const[list,setList]= useState(defaultList)
  const [key, setKey] = useState("");
  const [tableKey, setTableKey] = useState("");
  const handleSearch = (event) => {
    const { value } = event.target;
    setKey(value);
  };

  //   const searchResult = key.length > 0 ? list.filter((itm)=>{
  //       return itm === key
  //   }) : list
  //

  const searchResult =
    key.length > 0
      ? defaultList.filter((itm) => {
          return (
            !itm.indexOf(key) || !itm.toUpperCase().indexOf(key.toUpperCase())
          );
        })
      : defaultList;
  const handleTableSearch = (event) => {
    const { value } = event.target;
    setTableKey(value);
  };
  const tableSearchResult =
    tableKey.length > 0
      ? row.filter((item) => {
          return item.find((itm) => {
            return itm.toUpperCase().indexOf(tableKey.toUpperCase()) === 0;
          });
        })
      : row;

  return (
    <div>
      <Layout>
        <div className="searchFlied">
          <Input // first search input
            className="inputWrapper"
            type="text"
            value={key}
            onChange={handleSearch}
            placeHolder="Search for course.."
          />
        </div>
        <div>
          <List list={searchResult} />
        </div>
        <hr/>
        
        <div>
              <h1 className="secondHeading"> Search List in Table Form</h1>
          <div>
            <Input // second search input
              className="inputFiled"
              type="text"
              value={tableKey}
              onChange={handleTableSearch}
              placeHolder="Search for course.."
            />
            <button className="button" type="submit">
              <BsSearch />
            </button>
          </div>
          <div>
            <Table className="table" column={col} row={tableSearchResult} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Search;
