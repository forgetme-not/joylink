import MyInfo from "../../components/myInfo/myInfo";
import { supabase } from '../../App';
import { useEffect, useState } from "react"
import CocktailHeader from "../../components/cocktailHeader"

export default function Gallery() {
  const [imgURLs, setImgURLs] = useState([]);

  useEffect(() => {
    getAllURLs();
  }, [])

  // bucket에 있는 사진들 리스트를 가져오는 코드
  async function printlist() {
    const { data, error } = await supabase
      .storage
      .from('testtest')
      .list('img', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })
    if (error) {
      console.log(error);
    }
    console.log("프린트리스트됨?",data);
    return data;
  }

  async function getURL(name) {
    console.log("name값:",name);
    const { data, error } = await supabase
      .storage
      .from('testtest')
      .getPublicUrl(name);

    if (error) {
      console.error('Error getting public URL:', error.message);
      return null;
    }
    console.log('Retrieved URL:', data.publicUrl); // 경로 확인을 위한 로깅 추가
    return data.publicUrl;
  }

  async function getAllURLs() {
    const imglist = await printlist();
    const objectURLs = [];

    for (let i in imglist) {
      const imgURL = await getURL(`img/${imglist[i].name}`);
      if (imgURL) {
        objectURLs.push(imgURL);
      }
    }
    console.log('모든 이미지 URL:', objectURLs);
    setImgURLs(objectURLs);
  }

  return (
    <div className="mt-32">
      <CocktailHeader></CocktailHeader>
      <div className="flex justify-center">
        <div className="mb-16">
          <MyInfo />
        </div>
        <div className="w-3/5 p-6">
          <div className="flex items-center justify-between mt-8 mb-16">
            <h1 className="text-2xl font-bold" style={{ fontFamily: '"Dancing Script", sans-serif' }}>Gallery</h1>
          </div>
          <hr/>

          <div>
            <ul className="flex flex-wrap">
              {imgURLs.map((url, index) => (
                <li key={index} className="w-1/3 p-5">
                  <img src={url} alt={`Image ${index}`}className="max-w-full rounded-lg" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


