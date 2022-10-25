import React, {useEffect,useState} from "react";
import Link from "next/link";
//import ImageCard from "../fragments/js/ImageCard";


export default function Pr(props) {

    return (
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
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
    );
}
