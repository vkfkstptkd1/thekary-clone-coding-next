import React, {useEffect,useState} from "react";
import Link from "next/link";
//import ImageCard from "../fragments/js/ImageCard";


export default function Pr(props) {
    const [loading,setLoading]=useState(true);
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        console.log("시작")
        fetch(`http://10.82.22.96:8080/pr?category=홍보자료`,{
        }).then((response) => response.json())//json으로 받아서
          .then((json)=>{
              console.log(json)
              const jsonData=json.data.prs;
              setInfo(jsonData);
              setLoading(false);
        });
    },[])//이컴포넌트가 최초로 렌더링 될 때 한번만 사용하는 useEffct

    const dataList = info.map((jsondata)=>
        <tr style={{height:"50px"}} >
            <th>{jsondata.title}</th>
            <th>{jsondata.createDate}</th>
        </tr>
    )
    return (
        loading ?
            (<div>Loading...</div>) :
            (
                <div className="container-fluid">
                    <div className="row m-5">
                        <strong style={{fontSize: "20px"}} className="col-1">
                            보도자료
                        </strong>
                        <div className="col-2"> </div>
                        <div className="col-auto w-75 ">
                        <table className="table table-hover table-group-divider">
                            <thead className="border-top border-dark">
                            <tr className="text-center">
                                <th className="p-3">내용</th>
                                <th className="p-3">등록일</th>
                            </tr>
                            </thead>
                            <tbody>
                                {dataList}
                            </tbody>
                        </table>

                        </div>
                    </div>

                </div>

            )
    );
}
