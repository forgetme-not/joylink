import { useEffect } from "react";
import MyInfo from "../../components/myInfo/myInfo";
import { Link } from "react-router-dom";
import useUserStore from "../../zustand/useUserStore";

export default function MyClubPage() {
  const user = useUserStore(state => state.user);
  
  return (
    <div className="flex justify-center">
      <div>
        <MyInfo/> {/* 사이드바 */}
      </div>
      <div className="w-1/2 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">게시글</h1>
          <input type="text" id="search" placeholder="게시글 검색" className="px-2 py-1 border-2 border-indigo-800 border-solid rounded " />
        </div>
        <hr /><br />
        <h2 className="mb-4 text-lg font-semibold bg-gray-100">게시글 목록</h2>
        {/* 여기에 게시글 목록 컴포넌트를 추가 */}
      </div>
    </div>
  );
}

